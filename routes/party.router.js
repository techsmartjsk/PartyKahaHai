const express = require("express");
const router = express.Router();
const PartyController = require("../controllers/party.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/all/", authMiddleware, PartyController.getParties);
router.get("/", authMiddleware, PartyController.getPartiesOfUser);
router.post("/create", authMiddleware, PartyController.createParty);
router.get("/:id", authMiddleware, PartyController.getPartyById);
router.put("/edit/:id", authMiddleware, PartyController.updateParty);
router.delete("/delete/:id", authMiddleware, PartyController.deleteParty);

module.exports = router;
