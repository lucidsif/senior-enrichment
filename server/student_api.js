const studentApi = require('express').Router();
const Student = require('../db').models.student;


studentApi.get('/', (req, res, next) => {
    console.log(Student);
    Student.findAll()
        .then((students) => res.json(students).status(200))
        .catch(console.err)
});



module.exports = studentApi;