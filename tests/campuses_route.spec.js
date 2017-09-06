'use strict';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server/start');
const agent = request.agent(app);
const db = require('../db');
const {Campus, Student} = require('../db/models');

describe('Campuses Route:', () => {

    before(() => {
        return db.sync({force: true})
    });

    afterEach(() => {
        return Promise.all([
            Campus.truncate({cascade: true})
        ])
    });

    describe('GET /campuses', () => {

        it('responds with an array via JSON', () => {
            return agent
                .get('/api/campuses')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body).to.have.length(0);
                })
        });
    });

    it('returns a campus if there is one in the DB', () => {
        var campusName = 'Hunter College';
        var campusImage = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';
        var campus = Campus.build({
            name: campusName,
            image: campusImage
        });

        return campus.save().then(() => {
            return agent
                .get('/api/campuses')
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body[0].name).to.equal(campusName);
                })
        })
    });

    it('returns multiple campuses in the DB', () => {
        var campus1Name = 'Hunter College';
        var campus1Image = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';
        var campus1 = Campus.build({
            name: campus1Name,
            image: campus1Image
        });

        var campus2Name = 'Baruch College';
        var campus2Image = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';
        var campus2 = Campus.build({
            name: campus2Name,
            image: campus2Image
        });

        return Promise.all([campus1.save(), campus2.save()]).then(() => {
            return agent
                .get('/api/campuses')
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body.length).to.equal(2);
                    expect(res.body[0].name).to.equal(campus1.name);
                    expect(res.body[1].name).to.equal(campus2.name);
                })
        })
    })

    describe('GET /campuses/:id', () => {

        var campusName = 'Hunter College';
        var campusImage = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';

        var createdStudents;
        var createdCampus;
        beforeEach(() => {
            return Campus.create({
                name: campusName,
                image: campusImage
            }).then((campus) => {
                createdCampus = campus;
                return [
                    {name: 'Sif', email: 'sif@email.com'},
                    {name: 'Bob', email: 'bob@email.com'},
                    {name: 'Roy', email: 'roy@email.com'},
                ].map((student) => {
                    return Student.create({
                        name: student.name,
                        email: student.name,
                        campusId: campus.id
                    })
                });
            }).then((studentPromises) => {
                return Promise.all(studentPromises);
            }).then((students) => {
                createdStudents = students;
                return createdStudents;
            })
        });

        it('returns the JSON of the campuses based on the id', () => {
            return agent
                .get(`/api/campuses/${createdCampus.id}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.students).to.exist;
                    expect(res.body.students).to.be.an.instanceOf(Array);
                    expect(res.body.students.length).to.equal(3);
                })
        });

        it('returns a 404 error if accessing a non existant campus', () => {
            return agent
                .get('/api/campuses/999')
                .expect(404);
        })
    });

    describe('POST /campuses', () => {
        var campusName = 'Hunter College';
        var campusImage = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';
        var campus = Campus.build({
            name: campusName,
            image: campusImage
        });
        var postedCampus;

        it('creates a new campus', () => {
            return agent
                .post('/api/campuses')
                .send(campus)
                .expect(201)
                .expect((res) => {
                    postedCampus = res.body;
                    expect(res.body.id).to.not.be.an('undefined');
                    expect(res.body).to.be.an.instanceOf(Object);
                    expect(res.body.name).to.equal(campusName);
                })
        });

        it('saves the campus to the DB', () => {
            return agent
                .post('/api/campuses')
                .send(campus)
                .expect(201)
                .expect((res) => {
                    postedCampus = res.body
                })
                .then(() => Campus.findById(postedCampus.id))
                .then((foundCampus) => {
                    expect(foundCampus.id).to.equal(postedCampus.id);
                    expect(foundCampus.name).to.equal(postedCampus.name);
                })
        });

        it('sends back JSON of the actual created campus, not just the POSTed data', () => {
            return agent.post('/api/campuses')
                .send({
                    name: campusName,
                    image: campusImage,
                    extraneous: 'This should be quietly ignored by Sequelize'
                })
                .expect(201)
                .expect((res) => {
                    expect(res.body.extraneous).to.be.an('undefined');
                    expect(res.body.createdAt).to.exist;
                })
        })

        it('does not create a new campus without an imageUrl', () => {
            return agent.post('/api/campuses')
                .send({
                    name: campusName,
                })
                .expect(500);
        })


    });

    describe('PUT /campuses/:id', () => {
        var oldCampusName = 'Hunter College';
        var newCampusName = 'Baruch College';
        var campusImage = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';
        var theCampus;

        beforeEach(() => {
            return Campus.create({
                name: oldCampusName,
                image: campusImage
            }).then((campus) => {
                theCampus = campus;
            })
        });

        it('updates a campus', () => {
            return agent.put(`/api/campuses/${theCampus.id}`)
                .send({name: newCampusName})
                .expect(200)
                .expect((res) => {
                    expect(res.body.id).to.equal(theCampus.id)
                    expect(res.body).to.exist;
                    expect(res.body.name).to.equal(newCampusName);
                })
        });

        it('saves the updated campus to the DB', () => {
            return agent.put(`/api/campuses/${theCampus.id}`)
                .send({name: newCampusName})
                .expect(200)
                .then(() => Campus.findById(theCampus.id))
                .then((foundCampus) => {
                    expect(foundCampus.id).to.equal(theCampus.id);
                    expect(foundCampus.name).to.equal(newCampusName);
                })
        });

        it('gets 500 error for invalid update', () => {
            return agent.put(`/api/campuses/${theCampus.id}`)
                .send({name: ''})
                .expect(500)
        })

    });

    describe('Delete /campuses', () => {
        var campusName = 'Hunter College';
        var campusImage = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';
        var campus = Campus.build({
            name: campusName,
            image: campusImage
        });
        var createdCampus;

        beforeEach(() => {
            return campus.save().then((campus) => {
                createdCampus = campus;
                return createdCampus;
            })
        });

        it('should delete the campus with the right id', () => {
            return agent
                .delete(`/api/campuses/${createdCampus.id}`)
                .expect(202)
                .then(() => Campus.findAll())
                .then((foundCampuses) => {
                    expect(foundCampuses.length).to.equal(0);
                    expect(foundCampuses.filter((campus => campus.id === createdCampus.id)).length).to.equal(0)
                })
        });

        it('should return a 404 error if the id is not correct', () => {
            return agent
                .delete(`/api/campuses/95892`)
                .expect(404)
        })

    })

});
