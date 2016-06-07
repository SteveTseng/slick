'use strict';

const Song = require('./songsModel');

module.exports = {
	getSongs: function(request, response){
		let data = request.query;
		Song.sync().then(function(){
			Song.findAll({
				where:{
					//to be filled in later
					played: data.played;
				},
				order:{
					['ordernumber','ASC']
				}
			}).then(function(songs){
				response.send(songs)
			});
		});
	},
	postSongs: function(request, response){
		Song.sync().then(function(){
			return Song.create(request.body)
		});
	}
};