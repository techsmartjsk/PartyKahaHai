import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  update,
} from "firebase/database";
import app from "../utils/firebase.js";

const db = getDatabase(app);

async function createChat(participants, isGroup = false, name = "") {
  const chatRef = push(ref(db, "chats"));
  const chatData = {
    isGroup,
    name,
    participants: Object.fromEntries(participants.map((uid) => [uid, true])),
    createdAt: Date.now(),
  };
  await set(chatRef, chatData);
  return chatRef.key;
}

async function sendMessage(chatId, senderId, text) {
  const messageRef = push(ref(db, `messages/${chatId}`));
  await set(messageRef, {
    senderId,
    text,
    timestamp: Date.now(),
  });

  await update(ref(db, `chats/${chatId}`), {
    updatedAt: Date.now(),
  });
}

async function listenToMessages(chatId, callback) {
  const messagesRef = ref(db, `messages/${chatId}`);
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val() || {};
    const messages = Object.entries(data).map(([id, val]) => ({ id, ...val }));
    callback(messages);
  });
}

async function listenToUserChats(userId, callback) {
  const chatsRef = ref(db, "chats");
  onValue(chatsRef, (snapshot) => {
    const data = snapshot.val() || {};
    const userChats = Object.entries(data)
      .filter(([_, chat]) => chat.participants?.[userId])
      .map(([id, chat]) => ({ id, ...chat }));
    callback(userChats);
  });
}

export default {
  createChat,
  sendMessage,
  listenToMessages,
  listenToUserChats,
};
