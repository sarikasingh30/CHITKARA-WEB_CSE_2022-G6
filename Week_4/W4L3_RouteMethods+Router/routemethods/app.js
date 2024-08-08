const express=require("express")
const app=express()
const { v4: uuidv4 } = require('uuid');
PORT=8080
app.use(express.json())
let users=[
    {id:"1",
        name:"Sam",
        group:"G6"
    },
    {id:"2",
        name:"Danny",
        group:"G7"
    }
]
// GET Request
app.get("/users",(req,res)=>{
    res.send(users);
});
// POST Request
app.post("/users",(req,res)=>{
    let {name,group}=req.body
    let data={
        id:uuidv4(),
        name,
        group
    }
    users.push(data)
    res.status(200).redirect("/users")
})
//Single User 
app.get("/users/:id",(req,res)=>{
    let {id} = req.params

    let data = users.find(el => el.id==id)
    if(data){
        res.status(200).send(data)
    }
    else{
        res.status(404).send("User not found")
    }
})

// Delete Method
app.delete("/users/:id",(req,res)=>{
    let {id}=req.params
    users=users.filter((el)=>{
        if(el.id==id){
            return false
        }
        return true
    })
    res.status(200).redirect("/users")
})


// PUT 
app.put("/users/:id",(req,res)=>{
    let {id}=req.params
    let index=users.findIndex((el)=>el.id==id)
    if(index!=-1){
        users[index]={id, ...req.body}
        res.status(200).redirect("/users")
    }
    else{
        res.status(404).send("User Not Found")
    }
})

//PATCH
app.patch("/users/:id",(req,res)=>{
    let {id}=req.params
    let index=users.findIndex((el)=>el.id==id)
    
    if(index!=-1){
        users[index]={...users[index],...req.body}
        res.status(200).redirect("/users")
    }
    else{
        res.status(404).send("User Not Found")
    }
    
})



app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening to Port ${PORT}`)
    }
})