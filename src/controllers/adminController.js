const { resolve } = require('path');
const db = require('../db/db');
const Admin = require('../db/model/Admin');
const AdminId = 10000; //Used to check admin, will be removed


async function verifIsAdmin(username){
    return Admin.verifAdmin(db,username)
}


admin =async function(req,res){
    var isAdmin = await verifIsAdmin(req.session.username)
    if(isAdmin ){
        //let controll = this;
        //req est la requete, res la reponse
        if(req.session.username === null ){
            var val = "null";    
        }
        else{
            var val = req.session.username;
        }
        var sales=await getAllSales();
        var products=await getAllProducts();
        var users=await getAllUsers();

        res.render('admin',{Sales:sales,Products:products,Users:users,username:val});
    }else{
        res.send("<html><head><title>ERROR</title></head><body><h1>VOUS N'AVEZ RIEN A FAIRE ICI</h1></body></html>")
    }
};

catalogue = async function(req,res){
    if(req.session.username === null ){
        var val = "null";    
    }
    else{
        var val = req.session.username;
    }
    var products=await getAllProducts();
    res.render('catalogue',{Products:products,username:val});
};

async function getAllUsers(){
    var u = await Admin.getAllUsers(db);
    console.log(u);
    return u;
};

async function getAllProducts(){
   return await Admin.getAllProducts(db);
};

async function getAllSales(){
    return await Admin.getAllSales(db);
};

async function createProduct(name,price,bio,url){
    return Admin.ajoutProduit(name,price,bio,url,db);
};

async function deleteProduct(id){
    return Admin.deleteProduct(db,id);
}

async function deleteUser(id){
    return Admin.deleteUser(db,id);
}

/**
 * Insert other functions
 */

module.exports = {
    admin,
    catalogue,
    createProduct,
    getAllUsers,
    getAllProducts,
    getAllSales,
    deleteProduct,
    deleteUser,
};