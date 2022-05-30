const db = require('../db/db');
const User = require('../db/model/User');


async function login(username, password){
    return User.confirmUser(db,username,password);
};

async function insert(email,username,password){
    return User.insertUser(db,email,username,password);
};

async function getUserIDFromUsername(username){
    return User.userIDFromName(db,username);
};

async function modifyPassword(username,oldPassword,newPassword){
    return User.modifyPassword(db,oldPassword,newPassword,username);
};

async function modifyUsername(username,id){
    return User.modifyUsername(db,username,id);
};

async function getUserFromID(id){
    return User.userFromID(db,id);
};

module.exports = {
    login,
    insert,
    getUserIDFromUsername,
    modifyPassword,
    modifyUsername,
    getUserFromID
};