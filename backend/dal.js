const mongoose = require("mongoose");
const { Author, Post, Comment } = require("./models/Schema");
mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost:27017/blogDB");
