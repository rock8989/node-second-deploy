require('dotenv').config()

module.exports = {
  "development": {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    "database": "lecture",
    host: process.env.DEV_DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    "database": "lecture",
    host: process.env.PROD_DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": false,
    "logging": false
  }
}

