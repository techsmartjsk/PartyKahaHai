const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
  name: { type: String, required: true },
  partyDate: { type: Date, required: true },
  partyTime: { type: String, required: true },
  numberOfAttendees: { type: Number, required: true },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ageGroup: { type: String, required: false },
  gender: { type: String, required: false },
  community: { type: String, required: false },
  locality: { type: String, required: false },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
    required: false,
  },
  dateOfBirth: { type: Date, required: false },
  joiningFee: { type: Number, required: false },
  companyDesignation: { type: String, required: false },
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Request" }],
});

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
