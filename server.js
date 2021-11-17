// require dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Tweet = require("./models/tweet.js");
// initialize app
const app = express();

// config application settings
const port = process.env.PORT; // configure port

// connect and config mongodb
const DATABASE_URL =
  "mongodb+srv://admin:abc1234@cluster0.yq4gu.mongodb.net/twitter?retryWrites=true&w=majority"; // the all uppercase indicates "please don't change"
mongoose.connect(DATABASE_URL);

// set up listeners for mongodb events
// shortcut varaible
const db = mongoose.connection; // this is the object that represents

db.on("connected", () => console.log("Connected to MongoDB"));
db.on("error", (error) => console.log(`Mongodb Error ${error.message}`));

// mounting middleware
app.use(express.urlencoded({ extended: false })); // this creates req.body

// mount CRUD routes

// create route
app.post("/tweets", (req, res) => {
    Tweet.create(req.body, (err, tweet) => {
        res.send(tweet);// these are a set of instructions that take place AFTER the tweet is created
    }); // this code runs asychronously ... and accepts a callback function (which is just an anonymous function called as an argument in another function)
});

// tell app to listen
app.listen(port, () => console.log("Express is listening on port ", port));
