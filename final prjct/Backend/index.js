
const express = require('express');
const cors = require('cors');
const connectDB = require('./connection');
const Post = require('./model');
var PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());





// Get all posts
app.get("/api/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Add a post
app.post("/api/posts", async (req, res) => {
  const { title, category, image } = req.body;
  const newPost = new Post({ title, category, image });
  await newPost.save();
  res.status(201).json(newPost);
});

// Delete a post
app.delete("/api/posts/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

// Update a post
app.put("/api/posts/:id", async (req, res) => {
  const { title, category, image } = req.body;
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    { title, category, image },
    { new: true }
  );
  res.json(updatedPost);
});
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});