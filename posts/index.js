const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
const posts = {};

app.use(bodyParser.json());
app.use(cors());

// Gets all posts
app.get("/posts", (req, res) => {
  res.send(posts);
});

// Posts a new post
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
