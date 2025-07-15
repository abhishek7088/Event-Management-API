const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Registration = sequelize.define('Registrations', {}, { timestamps: false });

module.exports = Registration;
