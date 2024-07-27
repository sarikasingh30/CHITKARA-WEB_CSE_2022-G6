// Project => IMAGE COMPRESS APP
const fs=require("fs")
const Jimp=require("jimp")
function compressAndConvert(){
  return Jimp.read("img.png")
  .then((image) => {
    return image
      .resize(256, 256) // resize
      .quality(20) // set JPEG quality
      .greyscale() // set greyscale
      .getBufferAsync(Jimp.MIME_PNG)
      
  })
  .catch((err) => {
    console.error(err);
  });
}
compressAndConvert().then((data)=>{
  data=data.toString("base64")
  fs.writeFileSync("imga.txt",data)
}).catch((err)=>{
  console.log(err)
})

let val=fs.readFileSync("imga.txt")
console.log(val)
data=Buffer.from(val,"base64")
fs.writeFileSync("imgNew.png",data)