const express=require("express");
const {connection}=require("./connection/config")
const {userRouter}=require("./routes/user")
const app=express();
const cors=require("cors");
require("dotenv").config()
const port=process.env.port||4500;
app.use(cors());
app.use(express.json());
app.use("/",userRouter)



app.listen(port,async()=>{
    try {
        await connection;
        console.log("connected to database")
    } catch (error) {
        console.log(error.meassage)
    }
    console.log(`server is running on port ${port}`)
})