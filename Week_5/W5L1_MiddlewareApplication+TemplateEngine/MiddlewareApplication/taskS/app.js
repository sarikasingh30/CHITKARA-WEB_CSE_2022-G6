const express = require("express");
const fs = require("fs");
const path = require("path");
const {v4:uuidv4}=require("uuid")
const app = express();
const PORT = 8080;

// Built in Middleware
app.use(express.json())

//Validate User Middleware
function validateUser(req,res,next){
  let { name, email, password } = req.body;
  if((req.url=="/register"&&!name)||!email||!password){
    return res.status(404).send("Required Details Missing!..")
  }
  next()
}



function getUsers() {
  try {
    let data = fs.readFileSync(path.join(__dirname, "db.json"));
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}
function saveUsers(data) {
 try {
    fs.writeFileSync(path.join(__dirname, "db.json"),
    JSON.stringify(data));
 } catch (error) {
    console.log(error)
 }

}
app.post("/register", validateUser, (req, res) => {
  let { name, email, password } = req.body;
    users=getUsers()
    let userExists=users.some((el)=>el.email==email)
    if(userExists){
        return res.status(300).send("Email Already Exists")
    }
    let newUser={
        id: uuidv4(),
        name,
        email,
        password
    }
    users.push(newUser)
    saveUsers(users)
    res.status(200).send("Registered Successfully")
});

app.post("/login",validateUser,(req,res)=>{
    let {email,password}=req.body
    let users=getUsers()
    let user=users.find((el)=>el.email==email && el.password==password)
    if(!user){
        return res.status(404).send("User Not Found")
    }
    res.status(200).send("Login Successful")
})


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});
