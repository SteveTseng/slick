'use strict'

const Sequelize = require('sequelize');


var sequelize = new Sequelize('d9ki06095ksntk', 'iatupkhoswxboy', 'JZsHbsHx6fi3Wc_lQ8s0CWGPZB', {
  host: 'ec2-54-243-47-213.compute-1.amazonaws.com',
  dialect: 'postgres',

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