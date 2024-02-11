const config = require('../../config/config');

module.exports = {
  "development": {
    "username": config.username,
    "password": config.password,
    "database": config.database,
    "host": config.hostname,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
