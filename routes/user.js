const express=require("express");
const userRouter=express.Router();
const {userModel}=require("../model/usermodel")

userRouter.post("/api/post",async(req,res)=>{
    try {
        const travel=new userModel(req.body);
        await travel.save();
        res.status(200).json(travel)
    } catch (error) {
        res.status(400).json(error.message)
    }
})



userRouter.get("/api/retrive", async(req,res)=>{
    try {
        let data=await userModel.find();
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
})


userRouter.delete("/api/delete/:id", async(req,res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.send(200)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

userRouter.get("/api/filter",async (req,res)=>{
    const {Destination}=req.query;
    try {
        const data=await userModel.find({Destination:Destination});
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})



userRouter.get("/api/sorting",async (req,res)=>{
    const {Sort}=req.query;
    try {
        const data=await userModel.find().sort(Sort);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports={userRouter}