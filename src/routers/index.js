const express = require('express');
const router = require('./default');
const homeRouteur = require('./home');
const adminRouter = require('./admin');
const loginRouter = require('./login');
const registerRouter = require('./register');

/**
 * ????????
 */
const routeur = express.Router();

const getHomePage = function(req,res,next){
    if(req.session.username === null ){
        var val = "null";    
    }
    else{
        var val = req.session.username;
    }
    res.send('index',{username:val});
}

/**
 * Get home page
 */
router.get('/',getHomePage);
router.get('/home',getHomePage);

router.use('/login',loginRouter);
router.use('/register',registerRouter);
router.use('/admin',adminRouter);
//router.use('/gestion',adminRouter);


module.exports = router;