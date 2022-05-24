const express = require('express');
const router = require('./default');
const homeRouteur = require('./home');
const adminRouter = require('./admin');
const loginRouter = require('./login');

/**
 * ????????
 */
const routeur = express.Router();

const getHomePage = function(req,res,next){
    res.send('index');
}

/**
 * Get home page
 */
router.get('/',getHomePage);
router.get('/home',getHomePage);

router.use('/login',loginRouter);
//router.use('/register',/**registerRouter */);
//router.use('/gestion',adminRouter);


module.exports = router;