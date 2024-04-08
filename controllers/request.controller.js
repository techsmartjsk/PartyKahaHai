const Request = require("../models/request.model");
const Party = require("../models/party.model");

const createRequest = async (req, res) => {
  try {
    const user = req.user;
    const { partyId } = req.body;

    const party = await Party.findById(partyId);

    if (!user || !party) {
      return res.status(404).json({ message: "User or party not found" });
    }

    const existingRequest = await Request.findOne({
      user: user,
      party: partyId,
    });
    if (existingRequest) {
      return res.status(400).json({ message: "Request already exists" });
    }

    const request = new Request({ user: user._id, party: party._id });
    await request.save();

    res.status(201).json({ message: "Request created successfully", request });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const acceptRequest = async (req, res) => {
  try {
    const { requestId } = req.body;

    const request = await Request.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = "accepted";
    await request.save();

    res.status(200).json({ message: "Request accepted successfully", request });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const rejectRequest = async (req, res) => {
  try {
    const { requestId } = req.body;

    const request = await Request.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = "rejected";
    await request.save();

    res.status(200).json({ message: "Request rejected successfully", request });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createRequest,
  acceptRequest,
  rejectRequest,
};
