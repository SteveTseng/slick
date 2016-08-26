'use strict'

const Sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://user:stevetseng@live.com:5432/soslick');

var sequelize = new Sequelize('d9ki06095ksntk', 'iatupkhoswxboy', 'JZsHbsHx6fi3Wc_lQ8s0CWGPZB', {
  host: 'ec2-54-243-47-213.compute-1.amazonaws.com',
  dialect: 'heroku pg:psql --app heroku-postgres-c73ac359 HEROKU_POSTGRESQL_IVORY',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },


});


sequelize.authenticate()
	.then(()=>{console.log('connected!')})
	.catch((err)=>{console.log('error',err)})
	.done();

module.exports = sequelize;