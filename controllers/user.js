const User =require("../Model/User");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


// bsh taml inscription fel base de donné
exports.register=async(req,res)=> {
    try {
        const {firstname,name,email,passwrod}=req.body;
        const foundUser=await User.findOne({email})
        if (foundUser){
            return res.status(400).send({errors:[{msg:"email deja utilisé"}]})
        }
const saltRounds=10;
const hashpassword = await bcrypt.hash(passwrod,saltRounds);
const newUser = new User({...req.body})
 newUser.passwrod=hashpassword;
 console.log(newUser)
await newUser.save()
const token =jwt.sign({
    id:newUser._id
},process.env.SCRT_KEY,{expiresIn:"48h"})
res.status(200).send({succes:[{msg:"inscription avec success "}],user:newUser,token})
    } catch (error) {
        res.status(400).send({succes:[{msg:"try again"}],error})
    }
}


exports.login=async(req,res)=> {
    try {
        const {email,passwrod}=req.body;
        const foundUser=await User.findOne({email})
if (!foundUser) {
    return    res.status(400).send({succes:[{msg:"ma 3andekch compte"}]})

}
const checkpassword=await bcrypt.compare(passwrod,foundUser.passwrod)
if (!checkpassword){
    return    res.status(400).send({succes:[{msg:"password mosh howa"}]})
}
const token =jwt.sign({
    id:foundUser._id
},process.env.SCRT_KEY,{expiresIn:"48h"})
res.status(200).send({succes:[{msg:"connexion avec success "}],user:foundUser,token})
    } catch (error) {
        res.status(400).send({succes:[{msg:"try again"}]})
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({
            succes: [{ msg: "Liste des utilisateurs récupérée avec succès" }],
            users
        });
    } catch (error) {
        res.status(400).send({ succes: [{ msg: "Erreur lors de la récupération des utilisateurs" }], error });
    }
};
