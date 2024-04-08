const express = require("express");
const router = express.Router();
const RequestsController = require("../controllers/request.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, RequestsController.createRequest);
router.post("/accept", authMiddleware, RequestsController.acceptRequest);
router.post("/reject", authMiddleware, RequestsController.rejectRequest);

/**
 * @swagger
 * tags:
 *   name: Requests
 *   description: API endpoints for managing requests
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Request:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         user:
 *           type: string
 *           description: ID of the user making the request
 *         party:
 *           type: string
 *           description: ID of the party for which the request is made
 *         status:
 *           type: string
 *           enum: ["pending", "accepted", "rejected"]
 *       required:
 *         - user
 *         - party
 *         - status
 */

/**
 * @swagger
 * /request/:
 *   post:
 *     summary: Create a new request
 *     tags: [Requests]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Request'
 *     responses:
 *       201:
 *         description: Request created successfully
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /request/accept:
 *   post:
 *     summary: Accept a request
 *     tags: [Requests]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Request'
 *     responses:
 *       200:
 *         description: Request accepted successfully
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /request/reject:
 *   post:
 *     summary: Reject a request
 *     tags: [Requests]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Request'
 *     responses:
 *       200:
 *         description: Request rejected successfully
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Internal server error
 */

module.exports = router;
