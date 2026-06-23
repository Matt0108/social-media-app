const express = require("express");
const router = express.Router();

const {
  createMessage,
  getMessages,
  updateMessage,
  deleteMessage
} = require("../models/messageModel");

router.post("/", async (req, res) => {
  const message = await createMessage(req.body);
  res.json(message);
});

router.get("/", async (req, res) => {
  const messages = await getMessages();
  res.json(messages);
});

router.put("/:id", async (req, res) => {
  const updatedMessage = await updateMessage(req.params.id, req.body.content);
  res.json(updatedMessage);
});

router.delete("/:id", async (req, res) => {
  const deletedMessage = await deleteMessage(req.params.id);
  res.json(deletedMessage);
});

module.exports = router;