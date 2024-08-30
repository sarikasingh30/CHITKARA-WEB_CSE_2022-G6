const fs=require("fs")
const path=require("path")
module.exports.getTodos=(req,res)=>{
    let data=fs.readFileSync(path.join(__dirname,"../db.json"))
    data=JSON.parse(data)
    res.send(data)
}