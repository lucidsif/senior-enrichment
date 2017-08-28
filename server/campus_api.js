const campusApi = require('express').Router();
const Campus = require('../db').models.campus

campusApi.get('/', (req, res, next) => {
    Campus.findAll({ include: [{all: true}] })
        .then((campuses) => res.json(campuses).status(200))
        .catch(console.err)
});

campusApi.get('/:id', (req, res, next) => {
    const id = +req.params.id;
    Campus.findById(id)
        .then((campus) => res.json(campus).status(200))
        .catch(console.err)
});

campusApi.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then((campus) => res.json(campus).status(201))
        .catch((err) => {
            res.json(err).status(400)
        })
});

campusApi.put('/:id', (req, res, next) => {
    const id = +req.params.id;
    Campus.update(req.body, {
        where: {
            id
        }
    })
        .then((campus) => res.json(campus).status(204))
        .catch((err) => {
            res.json(err).status(err).status(400)
        })
});

campusApi.delete('/:id', (req, res, next) => {
    const id = +req.params.id;
    Campus.destroy({
        where: {
            id
        }
    })
        .then((campus) => res.json(campus).status(202))
        .catch((err) => {
            res.json(err).status(err.status(404))
        })
})

module.exports = campusApi;