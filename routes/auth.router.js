const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refreshToken", AuthController.refreshToken);
router.post("/verifyToken", AuthController.verifyToken);
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                  type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /auth/login:
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
 *               email:
 *                 type: string
 *               password:
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
 *   post:
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
 *   post:
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

module.exports = router;
