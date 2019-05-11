const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'
console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)
console.log('env = ', env)
// const config = require(__dirname + '/../config/config.json')[env];
const config = require(__dirname + '/../config/config.js')[env]
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.notice = require('./notice')(sequelize, Sequelize)
db.authLogin = require('./login')(sequelize, Sequelize)
db.popup = require('./popup')(sequelize, Sequelize)

module.exports = db

