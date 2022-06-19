const { Database } = require('sqlite');
//const bcrypt = require('bcrypt');
const { resolve } = require('path');
//const SALT_ROUNDS = 10;

/**
 * 
 * @param {Promise<Database>} db 
 * @returns 
 */
const ID_ADMIN = async(db) =>{
    return(
        (await db).run('SELECT user_id FROM users WHERE username=admin')
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
const ajoutProduit = async (name,price,bio,url,db) => {
    return (await db).run("INSERT INTO products (product_name, product_prize,product_bio,product_img) VALUES (?,?,?,?)",
    name,
    price,
    bio,
    url);
};

/**
 * 
 * @param {Promise<Database>} db 
 */
const getAllUsers = async(db)=>{   
    const Users = (await db).all("SELECT * FROM users",(err,rows)=>{
        if(err){
            console.log("Error during query : ");
            console.log(err);
            reject(err);
        }else{
            console.log(rows);
            resolve( rows); 
        }
        
    }) || undefined;

    return Users;
};


/**
 * 
 * @param {Promise<Database>} db 
 */
const getAllProducts = async(db)=>{
    return((await db).all("SELECT * FROM products",(err,rows)=>{
        if(err){
            console.log("Error during query : ");
            console.log(err);
        }else{
            console.log(rows);
            resolve(rows);
        }
        
    }));
};

/**
 * 
 * @param {Promise<Database>} db 
 * @param {number} pId 
 * @returns 
 */
const deleteProduct = async(db,pId)=>{
    return(await db).run("DELETE FORM products WHERE product_id = ?",pId);
};

/**
 * @param {Promise<Database>} db
 * @param {number} username
 */
 const deleteUser = async (db, uId) => {
	return (await db).run('DELETE FROM users WHERE user_id = ?', uId);
};

/**
 * 
 * @param {Promise<Database>} db 
 * @returns Sale={Id:sale_di,pName:product_name,uName:username}
 */
const   getAllSales = async(db)=>{
    return((await db).all(`SELECT s.sale_id,p.product_name,u.username 
    FROM sales AS s
    INNER JOIN products AS p ON p.product_id = s.product_id
    INNER JOIN users AS u ON u.user_id = s.user_id`,(err,rows)=>{
        if(err){
            console.log("Error during query : ");
            console.log(err);
        }else{
            console.log(rows);
            resolve(rows);
        }
    }));
};


module.exports = {
    checkId,
    ID_ADMIN,
    ajoutProduit,
    getAllUsers,
    getAllProducts,
    getAllSales,
    deleteProduct,
    deleteUser
};