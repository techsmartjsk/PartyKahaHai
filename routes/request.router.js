const express = require("express");
const router = express.Router();
const RequestsController = require("../controllers/request.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create", authMiddleware, RequestsController.createRequest);
router.post("/accept", authMiddleware, RequestsController.acceptRequest);
router.post("/reject", authMiddleware, RequestsController.rejectRequest);

module.exports = router;
