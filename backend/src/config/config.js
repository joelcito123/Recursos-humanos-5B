const dotenv = require('dotenv');

dotenv.config();

const config = {
    enviroment: process.env.ENV,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOSTNAME,
    dialect: process.env.DIALECT,
    port: process.env.PORT
}

Object.freeze(config);

module.exports = config;

