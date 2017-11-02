const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");

const AuthorSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  img: {
    type: String,
    default: "https://openclipart.org/download/247316/abstract-user-flat-2.svg"
  },
  name: { type: String },
  email: { type: String },
  bio: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  favPost: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  favComment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
});

const PostSchema = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  img: { type: String },
  date: { type: String, default: moment().format() },
  tags: [{ type: String }],
  featured: { type: Boolean, default: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  faves: { type: Number, default: 0 }
});

const CommentSchema = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  date: { type: String, default: moment().format() },
  featured: { type: Boolean, default: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  faves: { type: Number, default: 0 }
});

AuthorSchema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
AuthorSchema.methods.validPassword = function(password, dbpassword, done) {
  bcrypt.compare(password, dbpassword, (err, isMatch) => {
    console.log("password check");
    done(err, isMatch);
  });
};

const Author = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { Author, Comment, Post };
