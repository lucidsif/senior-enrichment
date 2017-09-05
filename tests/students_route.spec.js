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
            return campus;
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
    })
});