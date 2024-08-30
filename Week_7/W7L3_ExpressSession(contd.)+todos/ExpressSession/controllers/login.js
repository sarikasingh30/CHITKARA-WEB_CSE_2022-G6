const path=require("path")
module.exports.getLogin=(req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  }
module.exports.postLogin=(req, res) => {
    let { email, password } = req.body;
    if (email == req.session.email && password == req.session.password) {
      req.session.isAuth=true
      return res.redirect("/");
    }
    res.redirect("/login");
  }