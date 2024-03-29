const { Database } = require('sqlite');
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;



/**
 * @param {Promise<Database>} db 
 * @param {string} email 
 * @param {string} username 
 * @param {string} password 
 */
const insertUser = async (db,email,username,password) => {
        const hashpass = await bcrypt.hash(password,SALT_ROUNDS);
        return (await db).run('INSERT INTO users (username,email,password) VALUES(?,?,?)',
        username,
        email,
        hashpass);
};

/**
 * Confirms wether the user (ie name/password pair) exists in the database
 * @param {Promise<Database>} db
 * @param {string} name
 * @param {string} password
 */
 const confirmUser = async (db, name, password) => {
	//return true si l'utilisateur existe et que le password est bon
	const { password: dbHash } =
		(await (await db).get(
			'SELECT username, password FROM users WHERE username = ?',
			name
		)) || '';

	if (!dbHash) return false;

	return bcrypt.compare(password, dbHash);
};

/**
 * @param {Promise<Database>} db
 * @param {string} newUsername
 * @param {string} OldUsername
 */
const modifyUsername = async (db, newUsername, id) => {
	return (await db).run(
		'UPDATE users SET username = ? WHERE user_id = ?',
		newUsername,
		id
	);
};

/**
 * @param {Promise<Database>} db
 * @param {string} newPassword
 * @param {string} oldPassword
 * @param {string} username
 */
const modifyPassword = async (db, oldPassword, newPassword, username) => {
	if (!(await confirmUser(db, username, oldPassword)))
		throw 'Old password is incorrect!';

	const hashPass = await bcrypt.hash(newPassword, SALT_ROUNDS);
	return (await db).run(
		'UPDATE users SET password = ? WHERE password = ? AND username = ?',
		hashPass,
		oldPassword,
		username
	);
};

/**
 * @param {Promise<Database>} db
 * @param {string} username
 */
const deleteAccount = async (db, username) => {
	return (await db).run('DELETE FROM users WHERE username = ?', username);
};

/**
 * @param {Promise<Database>} db
 * @param {string} name
 */
const userIDFromName = async (db, name) => {
	return (
		(await db).run('SELECT user_id FROM users WHERE username = ?', name) || -1
	);
};

/**
 * @param {Promise<Database>} db
 * @param {number} id
 */
const userFromID = async (db, id) => {
	return (await db).run('SELECT * FROM users WHERE user_id = ?', id) || null;
};


module.exports = {
    insertUser,
    confirmUser,
    modifyUsername,
    modifyPassword,
    deleteAccount,
    userIDFromName,
    userFromID
};