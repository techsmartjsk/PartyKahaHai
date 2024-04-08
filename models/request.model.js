const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  party: { type: mongoose.Schema.Types.ObjectId, ref: "Party", required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
