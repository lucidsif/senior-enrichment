'use strict';
const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../package.json');


const name = process.env.DATABASE_NAME || `${pkg.name}_test`;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${name}`;
const db = new Sequelize(connectionString, {
    logging: debug, // export DEBUG=sql in the environment to get SQL queries
    native: true    // lets Sequelize know we can use pg-native for ~30% more speed (if you have issues with pg-native feel free to take this out and work it back in later when we have time to help)
});

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Student.belongsTo(Campus);
Campus.hasMany(Student, {onDelete: 'cascade'});

module.exports = {
    db,
    Student,
    Campus
};

// Causes errors
// function sync(force=false, retries=0, maxRetries=5) {
//     return db.sync({force})
//         .then(ok => console.log(`Synced models to db ${connectionString}`))
//         .catch(fail => {
//             // Don't do this auto-create nonsense in prod, or
//             // if we've retried too many times.
//             if (process.env.NODE_ENV === 'production' || retries > maxRetries) {
//                 console.error(chalk.red(`********** database error ***********`))
//                 console.error(chalk.red(`    Couldn't connect to ${connectionString}`))
//                 console.error();
//                 console.error(chalk.red(fail));
//                 console.error(chalk.red(`*************************************`))
//                 return
//             }
//             // Otherwise, do this autocreate nonsense
//             console.log(`${retries ? `[retry ${retries}]` : ''} Creating database ${name}...`)
//             return new Promise((resolve, reject) =>
//                 require('child_process').exec(`createdb "${name}"`, resolve)
//             ).then(() => sync(true, retries + 1))
//         })
// }
//
// db.didSync = sync();



