'use strict';

const sequelize = require('sequelize');
const db = require('./../models/dbModel');

const Song = db.define('song', {
	_id:{
		type:Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement:true
	},
	title:{
		type:Sequelize.STRING
	},
	ordernumber:{
		type:Sequelize.INTEGER
	},
	played:{
		type:Sequelize.BOOLEAN
	},
	roomid:{
		type:Sequelize.INTEGER
	}
});

module.exports = Song;