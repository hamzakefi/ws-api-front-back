// require mongoose
const mongoose=require("mongoose");
const connectDb=async()=> {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log('database tekhdem');
    } catch (error){
        console.error("database ma tekhdemch")
    }
}

module.exports=connectDb
