const fsPromise=require("fs/promises")
// console.log(__dirname)


const filePath=__dirname+"/database/data.txt"

let data=fsPromise.writeFile(filePath,"Hi ! I am a file" )
console.log(data)
data.then(()=>console.log("Written")).catch((err)=>{
    console.log(err)
})