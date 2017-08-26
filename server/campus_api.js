const campusApi = require('express').Router();
const db = require('../db');

campusApi.get('/', (req, res, next) => {
    res.send('campus');
});

module.exports = campusApi;