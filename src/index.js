const express=require("express");

const connect=require("./config/database")

const Tweet=require('./models/tweet');

const app=express();

app.listen(3000, async()=>{
    console.log("server running on port 3000")
    await connect();
    console.log("mongo db connected")
    const tweet=await Tweet.create({
        content:"first tweet",
        userEmail:"luck@gmail.com"
    });
    console.log(tweet)
})