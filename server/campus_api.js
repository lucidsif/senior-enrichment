const campusApi = require('express').Router();
// should connect to production or test depending on
const Campus = require('../db').models.campus;

campusApi.get('/', (req, res, next) => {
    Campus.findAll({include: [{all: true}]})
        .then((campuses) => res.json(campuses).status(200))
        .catch(console.err)
});

campusApi.get('/:id', (req, res, next) => {
    const id = +req.params.id;
    Campus.find({
        where: {
            id
        },
        include: [{all: true}]
    })
        .then((campus) => {
            if (!campus) {
                res.sendStatus(404);
            } else {
                res.json(campus).status(200)

            }
        })
        .catch(console.err)
});

campusApi.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then((campus) => res.status(201).json(campus))
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
        .then((campus) => res.status(204).json(campus))
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
        .then((campus) => res.sendStatus(202))
        .catch((err) => {
            res.json(err).status(err.status(404))
        })
})

module.exports = campusApi;