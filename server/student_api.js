const studentApi = require('express').Router();
const Student = require('../db').models.student;


studentApi.get('/', (req, res, next) => {
    Student.findAll({include: [{all: true}]})
        .then((students) => res.json(students).status(200))
        .catch(console.err)
});

studentApi.get('/:id', (req, res, next) => {
    const id = +req.params.id;
    Student.findById(id)
        .then((student) => res.json(student).status(200))
        .catch(console.err)
});

studentApi.post('/', (req, res, next) => {
    Student.create(req.body)
        .then((student) => res.json(student).status(201))
        .catch((err) => {
            res.json(err).status(400)
        })
});

studentApi.put('/:id', (req, res, next) => {
    const id = +req.params.id;
    Student.update(req.body, {
        where: {
            id
        }
    })
        .then((student) => res.json(student).status(204))
        .catch((err) => {
            res.json(err).status(err).status(400)
        })
});

studentApi.delete('/:id', (req, res, next) => {
    const id = +req.params.id;
    Student.destroy({
        where: {
            id
        }
    })
        .then((student) => res.json(student).status(202))
        .catch((err) => {
            res.json(err).status(err.status(404))
        })
})


module.exports = studentApi;
// find out when to use next for express