const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  reportedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: { type: String, enum: ["pending", "resolved"], default: "pending" },
  reportedReason: { type: String, required: true },
  detailedExplanation: { type: String, required: true },
  additionalInfo: [{ type: String }], // Array of URLs or file paths for images and videos
  action: {
    type: String,
    enum: ["none", "warning", "suspension", "ban"],
    default: "none",
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
