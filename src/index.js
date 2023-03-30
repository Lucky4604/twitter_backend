const express=require("express");

const connect=require("./config/database");


const TweetRepository=require('./repository/tweet-repository');

const app=express();

app.listen(3000, async()=>{
    console.log("server running on port 3000")
    await connect();
    console.log("mongo db connected")
    // const tweet=await Tweet.create({
    //     content:"second tweet"

    // });
  const tweetRepo=new TweetRepository();
  const tweet=await tweetRepo.create({content:'my tweet'})
  console.log(tweet);
  tweet.comments.push({content:'first comment '})
  await tweet.save();
  console.log(tweet);
  
    
})