const express = require("express");
const router = express.Router();
const { createAuthor, loginAuthor } = require("../dal");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async (req, res, next) => {
  const author = await createAuthor(req.body);
  if (author) res.send(true);
  res.send(false);
});

router.post("/login", async (req, res, next) => {
  console.log("login", req.body);
  const author = await loginAuthor(req.body);
});

module.exports = router;
