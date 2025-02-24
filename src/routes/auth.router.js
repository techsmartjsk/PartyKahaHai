import express from "express";
import AuthController from "../controllers/auth.controller"

const router = express.Router();

router.post("/authenticate", AuthController.sendCode);
router.post("/authenticate/verify", AuthController.verifyCode);
router.get("/refreshToken", AuthController.refreshToken);
router.get("/verifyToken", AuthController.verifyToken);

export const AuthRouter = { router}

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */
/**
 * @swagger
 * /:
 *   post:
 *     summary: Login with email and password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email(sub email/phone):
 *                 type: string
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
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /auth/refreshToken:
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
 * /auth/verifyToken:
 *   get:
 *     summary: Verify authentication token
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Token is valid
 *       401:
 *         description: Invalid access token
 */

/**
 * @swagger
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: accessToken
 */
