// 0) require dependencies
const mongoose = require("mongoose");

// 1) Define a mongoose schema
const tweetSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    author: String,
    likes: {
      type: Number,
      default: 0,
    },
    sponsored: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// 2) Compile mongoose schema into a mongoose model
module.exports = mongoose.model("Tweet", tweetSchema);

/*
    Tweet.create()
    Tweet.find()
    Tweet.findOne()
    Tweet.findById()
    Tweet.findByIdAndUpdate()
    Tweet.findByIdAndDelete()
*/
// 3) Use mongoose model methods to perfor CRUD data operations on a mongo db collection
