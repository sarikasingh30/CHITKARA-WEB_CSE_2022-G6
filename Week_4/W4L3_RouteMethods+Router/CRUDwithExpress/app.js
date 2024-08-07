const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 8080;

app.use(express.json())
let users = [
  {
    id: "1",
    name: "Sam",
    group: "G6",
  },
  {
    id: "2",
    name: "Danny",
    group: "G7",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  let {name,group}=req.body;
  let data={
    id:uuidv4(),
    name,
    group,
  }
  users.push(data);
  res.redirect("/users")
});
app.get("/users/:id",(req,res)=>{
    let {id}=req.params
    let data=users.find((el)=>{
        if(el.id==id){
            return el
        }
    })
    res.send(data)
})

app.delete("/users/:id",(req,res)=>{
    let {id}=req.params
    try{
        users = users.filter(user => user.id !== id);
        res.redirect("/getusers")
    } catch(err) {
        res.status(500).json({error:"internal server error"});
    }
})



app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening to port ${PORT}`);
  }
});
