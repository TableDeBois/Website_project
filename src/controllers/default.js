//src/controllers/default.js


module.exports.index = function(req,res){
    //req est la requete, res la reponse
    if(req.session.username === null ){
        var val = "null";    
    }
    else{
        var val = req.session.username;
    }
    res.render('index',{username:val});
};

module.exports.disconnect= function(req,res){

    val = null;
    req.session.username = null;
    res.render('index',{username:val});

}

module.exports.login = function(req,res){
    //req est la requete, res la reponse
    if(req.session.username === null ){
        var val = "null";    
    }
    else{
        var val = req.session.username;
    }
    res.render('login',{username:val});
};

module.exports.register = function(req,res){
    //req est la requete, res la reponse
    if(req.session.username === null ){
        var val = "null";    
    }
    else{
        var val = req.session.username;
    }
    res.render('register',{username:val});
};

module.exports.checkout = function(req,res){
    //req est la requete, res la reponse
    if(req.session.username === null ){
        var val = "null";    
    }
    else{
        var val = req.session.username;
    }
    res.render('checkout',{username:val});
}

module.exports.payement = function(req,res){
    //req est la requete, res la reponse
    if(req.session.username === null ){
        var val = "null";    
    }
    else{
        var val = req.session.username;
    }
    res.render('payement',{username:val});
}
