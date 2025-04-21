import express from "express";
import ChatController from "../controllers/chat.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, ChatController.createChat);
router.post("/:chatId/message", authMiddleware, ChatController.sendMessage);
router.get("/", authMiddleware, ChatController.getUserChats);
router.get("/:chatId/messages", authMiddleware, ChatController.getMessages);
/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Create a new chat
 *     tags: [Chats]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               participants:
 *                 type: array
 *                 items:
 *                   type: string
 *               isGroup:
 *                 type: boolean
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Chat created
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /chat:
 *   get:
 *     summary: Get all chats for the current user
 *     tags: [Chats]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of user's chats
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /chat/{chatId}/message:
 *   post:
 *     summary: Send a message in a chat
 *     tags: [Chats]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message sent
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Chat not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /chat/{chatId}/messages:
 *   get:
 *     summary: Get all messages from a chat
 *     tags: [Chats]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of messages
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Chat not found
 *       500:
 *         description: Internal server error
 */

export default router;
