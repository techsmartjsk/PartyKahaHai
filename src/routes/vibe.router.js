import express from "express";
import { vibeController } from "../controllers/vibe.controller.js";

const router = express.Router();

router.get("/", vibeController.getVibes);
router.get("/:id", vibeController.getVibeById);
router.post("/", vibeController.createVibe);
router.put("/:id", vibeController.updateVibe);
router.delete("/:id", vibeController.deleteVibe);

export default router;

/**
 * @swagger
 * tags:
 *   name: Vibes
 *   description: API for managing vibes
 */

/**
 * @swagger
 * /vibes:
 *   post:
 *     summary: Create a new vibe
 *     tags: [Vibes]
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
 *       500:
 *         description: Error creating vibe
 */

/**
 * @swagger
 * /vibes:
 *   get:
 *     summary: Get all vibes
 *     tags: [Vibes]
 *     responses:
 *       200:
 *         description: List of vibes
 *       500:
 *         description: Error fetching vibes
 */

/**
 * @swagger
 * /vibes/{id}:
 *   get:
 *     summary: Get a vibe by ID
 *     tags: [Vibes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vibe details
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
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vibe deleted successfully
 *       404:
 *         description: Vibe not found
 *       500:
 *         description: Error deleting vibe
 */
