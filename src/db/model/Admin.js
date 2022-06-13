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
};


/**
 * 
 * @param {Promise<Database>} db 
 */
const getAllProducts = async(db)=>{
    return(await db).all("SELECT * FROM products",(err,row)=>{
        console.log(row);
    });
};


/**
 * 
 * @param {Promise<Database>} db 
 * @returns Sale={Id:sale_di,pName:product_name,uName:username}
 */
const getAllSales = async(db)=>{
    return(await db).get(`SELECT s.sale_id,p.product_name,u.username 
    FROM sales AS s
    INNER JOIN products AS p ON p.product_id = s.product_id
    INNER JOIN users AS u ON u.user_id = s.user_id`,(err,row)=>{
        console.log(row);
    });
};


module.exports = {
    checkId,
    ID_ADMIN,
    ajoutProduit,
    getAllUsers,
    getAllProducts,
    getAllSales
};