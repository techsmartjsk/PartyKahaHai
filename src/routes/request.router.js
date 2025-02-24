import express from "express";
import RequestsController from "../controllers/request.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", authMiddleware, RequestsController.createRequest);
router.post("/accept", authMiddleware, RequestsController.acceptRequest);
router.post("/reject", authMiddleware, RequestsController.rejectRequest);

export const RequestRouter = { router }

/**
 * @swagger
 * tags:
 *   name: Requests
 *   description: API endpoints for managing party requests
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
 *         partyId:
 *           type: string
 *           description: ID of the party for which the request is made
 *         status:
 *           type: string
 *           enum: ["pending", "accepted", "rejected"]
 *           description: Status of the request
 *       required:
 *         - user
 *         - partyId
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
 *             type: object
 *             properties:
 *               partyId:
 *                 type: string
 *                 description: ID of the party to request access to
 *             required:
 *               - partyId
 *     responses:
 *       201:
 *         description: Request created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 request:
 *                   $ref: '#/components/schemas/Request'
 *       400:
 *         description: Request already exists
 *       404:
 *         description: User or party not found
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
 *             type: object
 *             properties:
 *               requestId:
 *                 type: string
 *                 description: ID of the request to accept
 *             required:
 *               - requestId
 *     responses:
 *       200:
 *         description: Request accepted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 request:
 *                   $ref: '#/components/schemas/Request'
 *       404:
 *         description: Request not found
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
 *             type: object
 *             properties:
 *               requestId:
 *                 type: string
 *                 description: ID of the request to reject
 *             required:
 *               - requestId
 *     responses:
 *       200:
 *         description: Request rejected successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 request:
 *                   $ref: '#/components/schemas/Request'
 *       404:
 *         description: Request not found
 *       500:
 *         description: Internal server error
 */
