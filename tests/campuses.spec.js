'use strict';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../server/start');
const agent = request.agent(app);

const db = require('../db/testdb');
const Campus = db.models.campus;
const Student = db.models.student;


describe('Campuses Route:', () => {

    before(() => {
        return db.sync({force: true})
    });

    afterEach(() => {
        return Promise.all([
            Student.truncate({ cascade: true}),
            Campus.truncate({ cascade: true})
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
                //expect(res.body).to.have.length(6);
                })
        });
    });

});