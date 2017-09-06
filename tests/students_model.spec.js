const expect = require('chai').expect;
const db = require('../db');
const {Campus, Student} = require('../db/models');

require('./campuses_route.spec');

describe('The Student model', () => {
    before(() => {
        return db.sync({force: true})
    });

    var campusName = 'Hunter';
    var campusImage = 'http://www.hunter.cuny.edu/artsci/pressroom/slideshow-home/hunter-college-exterior/image';
    var campusId;

    var studentName = 'John Doe';
    var studentEmail = 'johndoe@email.com';

    var campus;
    var student;
    beforeEach((done) => {
        campus = Campus.create({
            name: campusName,
            image: campusImage
        })
            .then((campus) => {
                campusId = campus.id;
                student = Student.build({
                    name: studentName,
                    email: studentEmail,
                    campusId: campus.id
                });
                done();
            })
            .catch(console.error)

    });

    afterEach(() => {
        return Promise.all([
            Campus.truncate({cascade: true})
        ])
    });

    describe('attributes definition', () => {
        it('includes name, email, and campusId fields', () => {
            return student.save()
                .then((student) => {
                    expect(student.name).to.equal(studentName);
                    expect(student.email).to.equal(studentEmail);
                    expect(student.campusId).to.equal(campusId);
                })
        });

        it('requires name', () => {
            //student.name = null;
            return student.save()
                .then(() => {
                    throw new Error('validation should fail when name is null');
                })
                .catch((err) => {
                    expect(err).to.be.an.instanceOf(Error);
                })
        });

        it('requires email', () => {
            student.email = null;
            return student.save()
                .then(() => {
                    throw new Error('validation should fail when email is null');
                })
                .catch((err) => {
                    expect(err).to.be.an.instanceOf(Error);
                })
        })
    });

    describe('associations', () => {
        /*
        Add a `belongsTo` relationship between students and campus, but
        make sure the campus is aliased as campusId for each student
         */
        it("student belongs to a campus", () => {
            return student.save()
                .then((student) => {
                return Student.find({
                    where: {
                        id: student.id
                    },
                    include: [Campus]
                });
                })
                .then((foundStudent) => {
                expect(foundStudent.campus).to.exist;
                expect(foundStudent.campus.id).to.equal(campusId);
                })
        })
    })
});