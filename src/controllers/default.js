//src/controllers/default.js
module.exports.index = function(req,res){
    //req est la requete, res la reponse
    res.render('index');
};

module.exports.login = function(req,res){
    res.render('login');
};

module.exports.register = function(req,res){
    res.render('register');
};

module.exports.checkout = function(req,res){
    res.render('checkout');
}

module.exports.payement = function(req,res){
    res.render('payement');
}

/**
module.exports.google = function(req,res){
    res.redirect('google.com');
}
*/