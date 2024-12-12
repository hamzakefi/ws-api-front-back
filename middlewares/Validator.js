const {check,validationResult}=require("express-validator");



exports.registerValidator=()=> [
    check("firstname","veuillez inserer votre prenom!!").not().isEmpty(),
    check("name","veuillez inserer name").not().isEmpty(),
    check("email","veuillez inserer votre mail").isEmail(),
    check("password","veuillez inserer password min 6 caratere ").isLength({min:6})
]

exports.loginValidator=()=> [
    check("email","veuillez inserer votre mail").isEmail(),
    check("password","veuillez inserer password min 6 caratere ").isLength({min:6})

]



exports.Validation =(req,res,next)=> {
    const errors=validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
}