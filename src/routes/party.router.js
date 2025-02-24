import express from "express";
import PartyController from "../controllers/party.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/all/", authMiddleware, PartyController.getParties);
router.get("/", authMiddleware, PartyController.getPartiesOfUser);
router.post("/", authMiddleware, PartyController.createParty);
router.get("/:id", authMiddleware, PartyController.getPartyById);
router.put("/:id", authMiddleware, PartyController.updateParty);
router.delete("/:id", authMiddleware, PartyController.deleteParty);

export default router;

/**
 * @swagger
 * /party/all:
 *   get:
 *     summary: Get all parties
 *     tags: [Parties]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Return all parties
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /party:
 *   get:
 *     summary: Get parties of the current user
 *     tags: [Parties]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Return parties of the current user
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new party
 *     tags: [Parties]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Party'
 *     responses:
 *       201:
 *         description: Party created successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /party/{id}:
 *   get:
 *     summary: Get party by ID
 *     tags: [Parties]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the party
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return party by ID
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Party not found
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update party by ID
 *     tags: [Parties]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the party
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Party'
 *     responses:
 *       200:
 *         description: Party updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Party not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete party by ID
 *     tags: [Parties]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the party
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Party deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Party not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Party:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         partyDate:
 *           type: string
 *           format: date-time
 *         partyTime:
 *           type: string
 *         numberOfAttendees:
 *           type: integer
 *         ageGroup:
 *           type: string
 *         gender:
 *           type: string
 *         community:
 *           type: string
 *         locality:
 *           type: string
 *         venue:
 *           type: string
 *         dateOfBirth:
 *           type: string
 *           format: date
 *         joiningFee:
 *           type: integer
 *         companyDesignation:
 *           type: string
 *       required:
 *         - name
 *         - partyDate
 *         - partyTime
 *         - numberOfAttendees
 *         - host
 */
