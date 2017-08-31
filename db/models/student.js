'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js');

// TODO: add validations
module.exports = db.define('student', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});
