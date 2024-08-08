const express = require('express')
const teacherHandler=require("./routes/teachers")
const studentHandler=require("./routes/students")
const app = express()
const port = 8000;
app.use(express.json())
app.use("/teachers",teacherHandler)
app.use("/students",studentHandler)

app.listen(port, (err) => {
   if(err){
    console.log(err)
   }
else{
    console.log(`Server Started on ${port}`);
}
})

