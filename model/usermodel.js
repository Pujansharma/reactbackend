const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    Destination:String,
    travelers:Number,
    Budget:Number
})

const userModel=mongoose.model("travelapp",userSchema);

module.exports={userModel}