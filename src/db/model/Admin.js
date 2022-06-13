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
 * @param {number} id 
 * @returns 
 */
const checkId = async(id)=>{
    return ID_ADMIN===id;
};


/**
 * 
 * @param {string} name 
 * @param {Number} price 
 * @param {Promise<Database>} db 
 */
const ajoutProduit = async (name,price,db) => {
    return (await db).run("INSERT INTO products (product_name, product_prize) VALUES (?,?)",
    name,
    price);
};

/**
 * 
 * @param {Promise<Database>} db 
 */
const getAllUsers = async(db)=>{
    return (await db).all("SELECT * FROM users",(err,row)=>{
        console.log(row);  
    });
}


module.exports = {
    checkId,
    ID_ADMIN,
    ajoutProduit,
    getAllUsers
};