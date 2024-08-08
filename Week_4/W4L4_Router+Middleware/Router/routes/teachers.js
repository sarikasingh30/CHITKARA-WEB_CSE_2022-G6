const express=require("express")
const router=express.Router()

let teachers=[
    "Sonam","Shivani","Ayushi","Navjot"
]

router.get("/",(req,res)=>{
    res.send(teachers)
})
router.delete("/",(req,res)=>{
    let name=req.body.name
    teachers=teachers.filter(teachers=>teachers!== name);
    res.redirect("/teachers")

})
router.post("/",(req,res)=>{
    let name=req.body.name
    teachers.push(name)
    res.redirect("/teachers")
})
module.exports=router