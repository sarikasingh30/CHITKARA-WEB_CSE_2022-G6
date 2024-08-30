function isAuthenticated(req,res,next){
    if(req.session.isAuth!=true){
        return res.redirect("/login")
    }
    next()
}

module.exports=isAuthenticated