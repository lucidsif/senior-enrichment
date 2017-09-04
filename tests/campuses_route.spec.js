'use strict';
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server/start');
const agent = request.agent(app);
const db = require('../db');
const {Campus} = require('../db/models');

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
    })

});
