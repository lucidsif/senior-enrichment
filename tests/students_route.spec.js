const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server/start');
const agent = request.agent(app);
const db = require('../db');
const {Campus, Student} = require('../db/models');

describe('Students Route', () => {
    before(() => {
        return db.sync({force: true})
    });

    var campus1;
    var studentName = 'John Doe';
    var studentEmail = 'johndoe@email.com';

    beforeEach(() => {
        return Campus.create({
            name: 'Hunter College',
            image: 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image'
        }).then((campus) => {
            campus1 = campus;
            return campus1;
        })
    });


    afterEach(() => {
        return Promise.all([
            Campus.truncate({cascade: true}),
            Student.truncate({cascade: true})
        ])
    })

    describe('GET /students', () => {
        it('responds with an array via JSON', () => {
            return agent
                .get('/api/students')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body).to.have.length(0);
                })
        })

        it('it returns a student if there is one in the DB', () => {
            return Student.create({
                name: studentName,
                email: studentEmail
            }).then((student) => {
                return agent
                    .get('/api/students')
                    .expect(200)
                    .expect((res) => {
                        expect(res.body).to.be.an.instanceOf(Array);
                        expect(res.body).to.have.length(1);
                        expect(res.body[0].id).to.equal(student.id);
                    })
            })
        })

        it('it returns multiple students if they are in the DB', async () => {
            var student1 = {
                name: `${studentName}1`,
                email: `${studentEmail}1`
            }
            var student2 = {
                name: `${studentName}2`,
                email: `${studentEmail}2`
            }

            var creatingStudents = [student1, student2].map((student) => Student.create(student));
            var createdStudents = await Promise.all(creatingStudents);

            return agent
                .get('/api/students')
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.be.an.instanceOf(Array);
                    expect(res.body).to.have.length(2);
                    // expect(res.body[0].name).to.equal(student1.name);
                    // expect(res.body[1].name).to.equal(student2.name);
                })
        })
    })

    describe('GET /students/:id', () => {
        var chosenStudent;
        beforeEach(async () => {
            var creatingStudents = [{
                name: 'Bo Jan',
                email: 'bo@email.com',
                campusId: campus1.id
            }, {
                name: 'Ted Bundy',
                email: 'ted@email.com',
                campusId: campus1.id
            }, {
                name: 'Lee Roy',
                email: 'lee@email.com',
                campusId: campus1.id
            }]
                .map(data => Student.create(data));

            return Promise.all(creatingStudents)
                .then(createdStudents => chosenStudent = createdStudents[1]);
        });

        it('returns the JSON of the student based on the id', () => {
            return agent
                .get(`/api/students/${chosenStudent.id}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body).to.be.an.instanceOf(Object);
                    expect(res.body.id).to.equal(chosenStudent.id);
                    expect(res.body.campusId).to.be.equal(campus1.id);
                })
        });

        it('returns a 404 error if the ID is not correct', () => {
            return agent
                .get(`/api/students/9999`)
                .expect(404);
        })

    })
});