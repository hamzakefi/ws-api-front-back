const express=require('express')
const cors = require("cors");

// create instance
const app=express();
app.use(cors());

// njib PORT mel .env
require("dotenv").config();
const PORT=process.env.PORT
//njib connect db
const connectDb=require("./config/connectDB");
// nkhadem connect db
connectDb();


app.use(express.json());

app.use("/api/user",require("./Routes/user"))



// creation de server
app.listen(PORT,error=>{
    error? console.error('fail to connect') :
    console.log(`server is running at ${PORT}`)
})