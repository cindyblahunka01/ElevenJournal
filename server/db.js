const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:9bf9685d1f19408c9a3fe2763fcffc67@localhost:5432/eleven-journal");

module.exports = sequelize;