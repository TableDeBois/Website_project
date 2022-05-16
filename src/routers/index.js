const express = require('express');
const router = require('./default');
const defaultRouteur = require('./default');
const homeRouteur = require('./home');

const routeur = express.Router();

const getHomePage = function(req,res,next){
    res.send('index');
}

router.get('/',getHomePage);
router.get('/Home',getHomePage);

module.exports = router;