const express=require("express")
const router=express.Router()
const path=require("path")
const profileController=require("../controllers/profile")
const authMiddleware=require("../middlewares/authMiddleware")
router.get("/",authMiddleware, profileController.getProfile );


module.exports=router