const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const User = require("../models/user");

router.post("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) throw new Error("User not found");

    const post = await Post.create({
      userId: req.params.userId,
      content: req.body.content,
      image: req.body.image
    });

    res.send(post);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.send(posts);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/:userId/:postId", async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.postId, userId: req.params.userId },
      req.body,
      { new: true }
    );

    res.send(post);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.delete("/:userId/:postId", async (req, res) => {
  try {
    await Post.findOneAndDelete({
      _id: req.params.postId,
      userId: req.params.userId
    });

    res.send({ message: "Post deleted" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;