'use strict'

const Sequelize = require('sequelize');

const sequelize = require('sequelize-heroku').connect();

if (sequelize)
{
    sequelize.authenticate().then( function() {
        var config = sequelize.connectionManager.config;
        console.log('sequelize-heroku: Connected to '+config.host+' as '+config.username+'.');

        sequelize.query('SELECT 1+1 as test').then( function(res) {

            console.log('1+1='+res[0].test);

        });

    }).catch( function(err) {
        var config = sequelize.connectionManager.config;
        console.log('Sequelize: Error connecting '+config.host+' as '+config.user+': '+err);
    });
}
else
{
    console.log('No environnement variable found.');
}

//const sequelize = new Sequelize('postgres://user:stevetseng@live.com:5432/soslick');

// const sequelize = new Sequelize('soslick', 'stevetseng', 'sKtMeCH1117', {
//   host: '',
//   dialect: 'postgres',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },

// });


sequelize.authenticate()
	.then(()=>{console.log('connected!')})
	.catch((err)=>{console.log('error',err)})
	.done();

module.exports = sequelize;