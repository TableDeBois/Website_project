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


async function getAllUsers(db){
    //write
};

async function getAllProducts(db){
    //write
};

async function getAllSales(db){
    //write
};

async function createProduct(name,price,db){
    //write
};

async function deleteProduct(id,db){
    //write
}

async function deleteUser(id,db){
    //write
}

/**
 * Insert other functions
 */

module.exports = {
    checkId,
    getIdAdmin,
    admin
};