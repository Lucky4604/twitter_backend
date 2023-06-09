const Tweet=require('../models/tweet');

class TweetRepository{

     async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet;

        }catch(error){
            console.log(error)

        }

    }
     async update(tweetId,data){
        try{
            const tweet=await tweet.findByIdAndUpdate(tweetId,data);
            return tweet;

        }catch(error){
            console.log(error)
        }

    }
    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return tweet;

            
        } catch (error) {
            console.log(error)
            
        }

    }

    async destroy(id){
        try{
            const tweet=await tweet.findByIdAndRemove(id);
            return tweet;

        }catch(error){
            console.log(error)
        }

    }
}
module.exports=TweetRepository
