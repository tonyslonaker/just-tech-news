// import the Sequelize constructor from the library
const { json } = require('express');
const Sequelize = require('sequelize');

// create connection to our database, pass in your MySql information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;