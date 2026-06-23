const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Message = mongoose.model("Message", messageSchema);

async function createMessage(data) {
  return await Message.create(data);
}

async function getMessages() {
  return await Message.find();
}

async function updateMessage(id, newContent) {
  return await Message.findByIdAndUpdate(
    id,
    { content: newContent },
    { new: true }
  );
}

async function deleteMessage(id) {
  return await Message.findByIdAndDelete(id);
}

module.exports = {
  Message,
  createMessage,
  getMessages,
  updateMessage,
  deleteMessage
};