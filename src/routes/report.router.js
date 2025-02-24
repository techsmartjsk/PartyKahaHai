import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import ReportController from "../controllers/report.controller.js";

const router = express.Router();

router.post("/", authMiddleware, ReportController.createReport);
router.get("/all", authMiddleware, ReportController.getReports);
router.put("/:id", authMiddleware, ReportController.updateReportStatus);
router.delete("/:id", authMiddleware, ReportController.deleteReport);

export default router

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: API endpoints for managing reports
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ReportInput:
 *       type: object
 *       properties:
 *         reportedUser:
 *           type: string
 *         reportedBy:
 *           type: string
 *         reportedReason:
 *           type: string
 *         detailedExplanation:
 *           type: string
 *         additionalInfo:
 *           type: array
 *           items:
 *             type: string
 *       required:
 *         - reportedUser
 *         - reportedBy
 *         - reportedReason
 *         - detailedExplanation
 *
 *     Report:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         reportedUser:
 *           type: string
 *         reportedBy:
 *           type: string
 *         status:
 *           type: string
 *         reportedReason:
 *           type: string
 *         detailedExplanation:
 *           type: string
 *         additionalInfo:
 *           type: array
 *           items:
 *             type: string
 *         action:
 *           type: string
 *       required:
 *         - _id
 *         - reportedUser
 *         - reportedBy
 *         - status
 *         - reportedReason
 *         - detailedExplanation
 *         - additionalInfo
 *         - action
 */

/**
 * @swagger
 * /report/:
 *   post:
 *     summary: Create a new report
 *     tags: [Reports]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReportInput'
 *     responses:
 *       201:
 *         description: Report created successfully
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /report/all:
 *   get:
 *     summary: Get all reports
 *     tags: [Reports]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /report/{id}:
 *   put:
 *     summary: Update the status of a report
 *     tags: [Reports]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the report to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: ["pending", "resolved"]
 *     responses:
 *       200:
 *         description: Report status updated successfully
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /report/{id}:
 *   delete:
 *     summary: Delete a report
 *     tags: [Reports]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the report to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Report deleted successfully
 *       401:
 *         description: Unauthorized request
 *       500:
 *         description: Internal server error
 */
