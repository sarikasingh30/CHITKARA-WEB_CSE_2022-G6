const path=require("path")
module.exports.getProfile=(req, res) => {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  }