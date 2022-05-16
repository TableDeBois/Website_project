const express = require('express');
const router = require('./default');
const defaultRouteur = require('./default');
const homeRouteur = require('./home');
const adminRouter = require('./admin');

const routeur = express.Router();

const getHomePage = function(req,res,next){
    res.send('index');
}

router.get('/',getHomePage);
router.get('/home',getHomePage);
router.use('/register',/**registerRouter */);
router.use('/login',/**login */);
router.use('/gestion',adminRouter);


module.exports = router;