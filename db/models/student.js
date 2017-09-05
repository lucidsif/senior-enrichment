'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js');

// TODO: add validations
module.exports = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
});
