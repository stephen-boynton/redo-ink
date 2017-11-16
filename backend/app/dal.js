const mongoose = require("mongoose");
const { Author, Post, Comment } = require("./models/Schema");
mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost:27017/blogDB");

//============================= Creation
function createAuthor(authorObj) {
  const author = new Author({
    username: authorObj.username,
    password: Author.generateHash(authorObj.pass),
    img: authorObj.img,
    name: authorObj.name,
    email: authorObj.email,
    bio: authorObj.bio
  });
  author.save(err => console.log);
}

function createPost(postObj) {
  const post = new Post({
    title: postObj.title,
    body: postObj.body,
    tags: postObj.tags,
    img: postObj.img,
    author: postObj.authorId
  });
  post.save(err => console.log);
}

//======================================== Query
async function getFrontPageContent() {
  const fPost = await getFeaturedPost();
  const fComments = await getFeaturedComments();
  const latestPosts = await getLatestPosts();
  return {
    fPost,
    fComments,
    latestPosts
  };
}

function getFeaturedPost() {
  return Post.findOne({ featured: true }).exec((err, post) => {
    if (err) console.error(err);
    return post;
  });
}

function getFeaturedComments() {
  return Comment.find({ featured: true })
    .limit(4)
    .sort({ date: -1 })
    .exec((err, comments) => {
      if (err) console.error(err);
      return comments;
    });
}

function getLatestPosts() {
  return Posts.find()
    .limit(8)
    .sort({ date: -1 })
    .exec((err, comments) => {
      if (err) console.error(err);
      return comments;
    });
}

module.exports = {
  createAuthor,
  createPost,
  getFrontPageContent
};
