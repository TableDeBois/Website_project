const { Database } = require('sqlite');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

/**
 * 
 * @param {Promise<Database>} db 
 * @returns 
 */
const ID_ADMIN = async(db) =>{
    return(
        (await db).run('SELECT user_id FROM users WHERE username=ADMIN')
    );
};

/**
 * 
 * @param {Number} id 
 * @returns 
 */
const checkId = async(id)=>{
    return ID_ADMIN===id;
};

const ajoutProduit = async (db,productName) => {

};

module.exports = {
    checkId,
    ID_ADMIN
};