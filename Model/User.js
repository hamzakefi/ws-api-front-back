const mongoose=require('mongoose');
const {Schema,model}=mongoose;


const UserSchema= new Schema ({
    firstname:{
        type :String,
        required:true,
    }, 
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    passwrod:{
        type:String,
        required:true,
    }

})

module.exports=User=model("user",UserSchema);