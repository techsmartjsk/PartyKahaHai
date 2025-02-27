import express from "express";
import { vibeController } from "../controllers/vibe.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, vibeController.getVibes);
router.get("/:id", authMiddleware, vibeController.getVibeById);
router.post("/", authMiddleware, vibeController.createVibe);
router.put("/:id", authMiddleware, vibeController.updateVibe);
router.delete("/:id", authMiddleware, vibeController.deleteVibe);

export default router;

/**
 * @swagger
 * tags:
 *   name: Vibes
 *   description: API for managing vibes
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /vibes:
 *   post:
 *     summary: Create a new vibe
 *     tags: [Vibes]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentVibe:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               expiry:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Vibe created successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error creating vibe
 */

/**
 * @swagger
 * /vibes:
 *   get:
 *     summary: Get all vibes
 *     tags: [Vibes]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of vibes
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error fetching vibes
 */

/**
 * @swagger
 * /vibes/{id}:
 *   get:
 *     summary: Get a vibe by ID
 *     tags: [Vibes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vibe details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vibe not found
 *       500:
 *         description: Error fetching vibe
 */

/**
 * @swagger
 * /vibes/{id}:
 *   put:
 *     summary: Update a vibe
 *     tags: [Vibes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
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
 *               currentVibe:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               expiry:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vibe updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vibe not found
 *       500:
 *         description: Error updating vibe
 */

/**
 * @swagger
 * /vibes/{id}:
 *   delete:
 *     summary: Delete a vibe
 *     tags: [Vibes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vibe deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vibe not found
 *       500:
 *         description: Error deleting vibe
 */
