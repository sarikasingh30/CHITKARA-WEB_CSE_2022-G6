// CALLBACK API
// const fs = require("fs");

// fs.unlink("database/a.txt", (err) => {
//   if (err) {
//     console.log("Nhi hua");
//   } else {
//     console.log("Hogya delete");
//   }
// });

// Using Promises API
const fspromises=require("fs/promises")
const path=require("path")
const filepath=path.join(__dirname,"/database/db.txt")
const filepath1=path.join(__dirname,"/database/db1.json")

// Delete Text File
fspromises.unlink(filepath).then(()=>{
    console.log("File Deleted")
}).catch((err)=>{
    console.log(err)
})

// Delete JSON File
fspromises.unlink(filepath1).then(()=>{
    console.log("File Deleted")
}).catch((err)=>{
    console.log(err)
})

// Try rm and rmdir also 

// (Know the difference between all the three :
// UNLINK , RM , RMDIR
// )