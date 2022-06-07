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

    await db.exec(`CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY AUTOINCREMENT,
	username NVARCHAR(25) UNIQUE NOT NULL,
	email NVARCHAR(50) NOT NULL,
	password TEXT NOT NULL)`);

	await db.exec(`CREATE TABLE IF NOT EXISTS products (product_id INTEGER PRIMARY KEY AUTOINCREMENT,
		product_name NVARCHAR(25) NOT NULL,
		product_prize REAL NOT NULL,
		sold INTEGER)`); //finir d'écrire les scripts sql

	await db.exec(`CREATE TABLE IF NOT EXISTS sales (sale_id INTEGER PRIMARY KEY AUTOINCREMENT,
		product_id INTEGER NOT NULL,
		user_id INTEGER NOT NULL,
		FOREIGN KEY(product_id)
			REFERENCES products (product_id),
		FOREIGN KEY(user_id)
			REFERENCES users (user_id))`);

};



module.exports = db;
