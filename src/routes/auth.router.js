import express from "express";
import AuthController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/authenticate", AuthController.sendCode);
router.post("/authenticate/verify", AuthController.verifyCode);
router.get("/refreshToken", AuthController.refreshToken);
router.get("/verifyToken", AuthController.verifyToken);

export default router;

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /authenticate:
 *   post:
 *     summary: Request an OTP for authentication
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sub:
 *                 type: string
 *                 description: Email or phone number of the user
 *                 example: user@example.com
 *               type:
 *                 type: string
 *                 enum: [email, phone]
 *                 description: OTP delivery method
 *                 example: email
 *     responses:
 *       201:
 *         description: OTP sent successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /authenticate/verify:
 *   post:
 *     summary: Verify the OTP and authenticate the user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sub:
 *                 type: string
 *                 description: Email or phone number of the user
 *                 example: user@example.com
 *               pinId:
 *                 type: string
 *                 description: Unique ID of the OTP sent
 *                 example: "1234567890"
 *               pin:
 *                 type: string
 *                 description: OTP entered by the user
 *                 example: "1234"
 *               role:
 *                 type: string
 *                 description: Role of the user
 *                 example: "user"
 *     responses:
 *       200:
 *         description: Login successful
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: JWT access token and refresh token
 *                 example: |
 *                   accessToken=your_access_token; Path=/; HttpOnly; SameSite=None
 *                   refreshToken=your_refresh_token; Path=/; HttpOnly; SameSite=None
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *       401:
 *         description: Invalid verification code
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /refreshToken:
 *   get:
 *     summary: Refresh authentication token
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Access token refreshed successfully
 *       401:
 *         description: Refresh token not found or invalid
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /verifyToken:
 *   get:
 *     summary: Verify authentication token
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Authentication Successful
 *       401:
 *         description: Invalid access token
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: accessToken
 */
