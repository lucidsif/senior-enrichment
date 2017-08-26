const studentApi = require('express').Router();
const db = require('../db');


studentApi.get('/', (req, res, next) => {
    res.send('students');
});

module.exports = studentApi;