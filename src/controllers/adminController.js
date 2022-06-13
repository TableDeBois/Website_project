const db = require('../db/db');
const Admin = require('../db/model/Admin');

async function checkId(id){
    /**
     * use ID & DB to check
     */
    return Admin.checkId(id,db)
};

async function getIdAdmin(){
    return Admin.ID_ADMIN(db);
}

admin = function(req,res){
    req.sess
    res.render('admin');
};


async function getAllUsers(){
    Admin.getAllUsers(db);
};

async function getAllProducts(db){
    //write
};

async function getAllSales(db){
    //write
};

async function createProduct(name,price){
    Admin.ajoutProduit(name,price,db);
};

async function deleteProduct(id){
    //write
}

async function deleteUser(id){
    //write
}

/**
 * Insert other functions
 */

module.exports = {
    checkId,
    getIdAdmin,
    admin,
    createProduct
};