'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://iatupkhoswxboy:JZsHbsHx6fi3Wc_lQ8s0CWGPZB@ec2-54-243-47-213.compute-1.amazonaws.com:5432/d9ki06095ksntk
');



sequelize.authenticate()
	.then(()=>{console.log('connected!')})
	.catch((err)=>{console.log('error',err)})
	.done();

module.exports = sequelize;