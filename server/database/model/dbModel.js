'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://user:stevetseng@live.com:5432/soslick');

sequelize.authenticate()
	.then(()=>{console.log('connected!')})
	.catch((err)=>{console.log('error',err)})
	.done();

module.exports = sequelize;