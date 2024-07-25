
const fs = require('fs');
const content = "Hello world";
//append
fs.appendFile('file.txt',content+'\n',(err)=>{
    if(err){
        console.error("error");
    }else{
        console.log("File written!!");
    }
})
























// // Using Promises API
// const fspromises=require("fs/promises")
// const path=require("path")
// const filepath=path.join(__dirname,"/database/db.txt")
// const filepath1=path.join(__dirname,"/database/db1.json")

// // Append / Updated Text File
// fspromises.appendFile(filepath,"Added using Promise API").then(()=>{
//     console.log("File Updated")
// }).catch((err)=>{
//     console.log(err)
// })
