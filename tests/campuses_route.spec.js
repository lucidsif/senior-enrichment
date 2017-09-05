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
                Promise.all(studentPromises);
            }).then((students) => {
                createdStudents = students;
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

});
