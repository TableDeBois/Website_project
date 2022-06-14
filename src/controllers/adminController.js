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

/**
 * Insert other functions
 */

module.exports = {
    checkId,
    getIdAdmin
};