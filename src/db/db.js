const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const db = open({
	filename: "./src/db/db.sqlite"/**process.env.DB_PATH*/,
	driver: sqlite3.cached.Database,
}).then((db) => {
	/** Instantiate DB*/
    createDb(db);

	return db;
});

/**
 * @param {Promise<Database>} db
 */
const createDb = async (db) => {

    //await db.exec(`CREATE TABLE IF NOT EXITS users`) //finir d'écrire les scripts sql

};

/** 
async function createDb (db){
	await.db.exec(`CREATE TABLE IF NOT EXITS users`) //finir d'écrire les scripts sql
}*/


module.exports = db;
