'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js');


module.exports = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {notEmpty: true}
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {isUrl: true, notEmpty: true}
    },

});
