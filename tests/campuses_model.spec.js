'use strict';

const expect = require('chai').expect;
const {db, Campus, Student} = require('../db/testdb');

describe('The `Campus` model', function () {

    /**
     * First we clear the database and recreate the tables before beginning a run
     */
    before(function () {
        return db.sync({force: true});
    });

    /**
     * Next, we create an (un-saved!) article instance before every spec
     */
    var campusName = 'Campus1';
    var campusImage = 'http://campusimage.com/app.png';

    var campus;
    beforeEach(function(){
        campus = Campus.build({
            name: campusName,
            image: campusImage
        });
    });

    /**
     * Also, we empty the tables after each spec
     */
    afterEach(function () {
        return Promise.all([
            //   Article.truncate({ cascade: true }),
            Campus.truncate({ cascade: true })
        ]);
    });

    describe('attributes definition', function(){

        it('includes `name` and `image` fields', function () {

            return campus.save()
                .then(function (savedCampus) {
                    expect(savedCampus.name).to.equal(campusName);
                    expect(savedCampus.image).to.equal(campusImage);
                });

        });

        it('requires `name`', function () {

            campus.name = null;
            return campus.validate()
                .then(function () {
                    throw new Error('validation should fail when name is null');
                })
                .catch(err => {
                    expect(err).to.be.an.instanceOf(Error);
                })
        });
        it('requires `image`', function () {

            campus.image = null;
            return campus.validate()
                .then(function () {
                    throw new Error('validation should fail when image is null');
                })
                .catch(err => {
                    expect(err).to.be.an.instanceOf(Error);
                })
        });
    })
})
