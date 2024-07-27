const http=require("http")
let PORT=8080
const Server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end()
    } 
    else if(req.url=="/hi"){
        
    }
    console.log(req.url)
    res.end("<h1 style=color:blue>Hello World</h1>")
})

Server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on Port ${PORT}`)
    }
})

