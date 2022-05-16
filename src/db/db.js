const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const db = open({
	filename: process.env.DB_PATH,
	driver: sqlite3.cached.Database,
}).then((db) => {
	/** Instantiate DB*/
    createDb(db);

	return db;
});



const createDb = async (db => {

    await.db.exec(`CREATE TABLE IF NOT EXITS users`) //finir d'écrire les scripts sql

});


module.exports = db;
