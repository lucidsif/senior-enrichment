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
        .then((student) => {
            if (student) {
                res.status(200).json(student);
            } else {
                res.sendStatus(404)
            }
        })
        .catch((err) => res.status(404).json(err))
});

studentApi.post('/', (req, res, next) => {
    Student.create(req.body)
        .then((student) => {
            return Student.find({where: {id: student.id}, include: [{all: true}]});
        })
        .then((foundStudent) => res.json(foundStudent).status(201))
        .catch((err) => {
            res.status(500).json(err);
        })
});

studentApi.put('/:id', (req, res, next) => {
    const id = +req.params.id;
    Student.update(req.body, {
        where: {
            id
        }
    })
        .then((student) => {
            if (student) {
                return Student.findById(id);
            } else {
                res.sendStatus(404)
            }
        })
        .then((foundStudent) => res.status(200).json(foundStudent))
        .catch((err) => {
            res.status(500).json(err);
        })
});

studentApi.delete('/:id', (req, res, next) => {
    const id = +req.params.id;
    Student.destroy({
        where: {
            id
        }
    })
        .then((student) => {
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json(student);
        }
    })
        .catch((err) => {
            res.status(500).json(err);
        })
})


module.exports = studentApi;
// find out when to use next for express