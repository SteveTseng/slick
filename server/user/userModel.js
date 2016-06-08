'use strict';

const Sequelize = require('sequelize');
const db = require('./../database/model/dbModel');

const User = db.define('user', {
	username: {
		type:Sequelize.STRING
	},
	password: {
		type:Sequelize.STRING
	}
})

module.export = User;