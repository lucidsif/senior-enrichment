const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server/start');
const agent = request.agent(app);
const db = require('../db');
const {Campus, Student} = require('../db/models');

describe('Students Route', () => {
    before(() => {
        return db.sync({force: true})
    })

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
    })
});