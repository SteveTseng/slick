'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres//soslick:soslick@localhost/soslick');

sequelize.authenticate().then(errors => {
	console.log('sequelize loaded, and authenticating')
	console.log(errors)
});

module.exports = sequelize;