//src/controllers/default.js
module.exports.index = function(req,res){
    //req est la requete, res la reponse
    res.render('index');
};

module.exports.page1 = function(req,res){
    res.render('page1');
};

/**
module.exports.google = function(req,res){
    res.redirect('google.com');
}
*/