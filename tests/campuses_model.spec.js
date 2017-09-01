'use strict';

const expect = require('chai').expect;

const app = require('../server/start');

// create new db in test db
const db = require('../db/testdb');
const Campus = db.models.campus;
const Student = db.models.student;


describe('The Campus model', () => {
    before(() => {
        return db.sync({force: true})
    });

    var campusName = 'Hunter College';
    var imageUrl = 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.hunter.cuny.edu%2Fartsci%2Fpressroom%2Fslideshow-home%2Fhunter-college-exterior%2Fimage&imgrefurl=http%3A%2F%2Fwww.hunter.cuny.edu%2Fartsci&docid=FFRz6MZA-1lbpM&tbnid=hQ9g223Wtds82M%3A&vet=10ahUKEwiZ1OLfpoTWAhWh7YMKHfkACoIQMwiHASgDMAM..i&w=1024&h=683&bih=703&biw=1280&q=hunter%20college&ved=0ahUKEwiZ1OLfpoTWAhWh7YMKHfkACoIQMwiHASgDMAM&iact=mrc&uact=8'

    var campus;
    beforeEach(() => {
        campus = Campus.build({
            name: campusName,
            image: imageUrl
        })
    });

    // afterEach(() => {
    //     return Promise.all([
    //         Student.truncate(),
    //         Campus.truncate()
    //     ])
    // });

    describe('attributes definiton', () => {

        it('includes name and image fields', () => {
            return campus.save()
                .then((campus) => {
                    expect(campus.name).to.equal(campusName);
                })
                .catch(console.error);
        })
    })


});
