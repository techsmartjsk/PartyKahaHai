const express = require("express");
const router = express.Router();
const ReportController = require("../controllers/report.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create", authMiddleware, ReportController.createReport);
router.get("/all", authMiddleware, ReportController.getReports);
router.put("/:id", authMiddleware, ReportController.updateReportStatus);
router.delete("/:id", authMiddleware, ReportController.deleteReport);

module.exports = router;
