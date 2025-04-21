import ChatService from "../services/chat.service.js"; // contains Firebase logic

async function createChat(req, res) {
  try {
    const { participants, isGroup = false, name = "" } = req.body;

    if (!participants || participants.length < 2) {
      return res.status(400).json({ message: "At least 2 participants are required." });
    }

    const chatId = await ChatService.createChat(participants, isGroup, name);
    res.status(201).json({ message: "Chat created successfully", chatId });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

async function sendMessage(req, res) {
  try {
    const { chatId } = req.params;
    const { text } = req.body;
    const senderId = req.user?.uid;

    if (!text) {
      return res.status(400).json({ message: "Message text is required." });
    }

    await ChatService.sendMessage(chatId, senderId, text);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

async function getMessages(req, res) {
  try {
    const { chatId } = req.params;

    ChatService.listenToMessages(chatId, (messages) => {
      res.status(200).json({ messages });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

async function getUserChats(req, res) {
  try {
    const userId = req.user?.uid;

    ChatService.listenToUserChats(userId, (chats) => {
      res.status(200).json({ chats });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

export default {
  createChat,
  sendMessage,
  getMessages,
  getUserChats,
};
