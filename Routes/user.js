const express=require("express");
const {register,login, getAllUsers}=require('../controllers/user');
const { registerValidator, loginValidator, Validation } = require("../middlewares/Validator");
const isAuth = require("../middlewares/isAuth");
const router=express.Router()



router.post("/register",registerValidator(),Validation,register)
router.post("/login",loginValidator(), Validation,login)
router.get("/users", getAllUsers);
router.get("/current",isAuth ,(req,res)=>{
    res.send(req.user)
})


module.exports=router