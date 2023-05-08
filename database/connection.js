const config = require("./db.config");

const { Sequelize } = require('sequelize');


const db = new Sequelize(config.NAME_DB, config.USER_DB, config.PASSWORD_DB,{
    host: config.HOST_DB,
    dialect: 'mysql',
})

module.exports = db