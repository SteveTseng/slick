'use strict';

const Sequelize = require('sequelize');
const db = require('./../models/dbModel');

const Song = db.define('song', {
	_id:{
		type:Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement:true
	},
	username:{
		type:Sequelize.STRING
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