const express=require("express");

const connect=require("./config/database")

const app=express();

app.listen(3000, async()=>{
    console.log("server running on port 3000")
    await connect();
    console.log("mongo db connected")
})