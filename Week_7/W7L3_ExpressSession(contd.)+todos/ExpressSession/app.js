const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
const registerHandler=require("./routes/register")
const loginHandler=require("./routes/login")
const profileHandler=require("./routes/profile")
const todosHandler=require("./routes/todos")
const authMiddleware=require("./middlewares/authMiddleware")
var session = require("express-session");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "group g6",
    resave: false,
    saveUninitialized: true,
  })
);


app.use("/register",registerHandler)
app.use("/login",loginHandler)
app.use("/profile",profileHandler)
app.use("/todos",todosHandler)
app.get("/",authMiddleware,(req, res) => {
    res.redirect("/profile")
});



app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/login")
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});
