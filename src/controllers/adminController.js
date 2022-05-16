const db = require('../db/database');
const Admin = require('../db/model/Admin');

async function checkId(id){
    /**
     * use ID & DB to check
     */
    return Admin.checkId(id,db)
}

/**
 * Insert other functions
 */

module.exports = {
    checkId
};