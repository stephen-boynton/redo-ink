const express = require("express");
const router = express.Router();
const { createAuthor } = require("../dal");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async (req, res, next) => {
  console.log(req.body);
  const author = await createAuthor(req.body);
});

module.exports = router;
