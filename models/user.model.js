const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  blocked: { type: Boolean, default: false },
  partyType: { type: String, required: false },
  profileImage: String,
  phoneNumber: String,
  role: { type: String, required: true },
  govtUID: String,
  dateOfBirth: Date,
  gender: String,
  city: String,
  state: String,
  industry: String,
  company: String,
  designation: String,
  chatRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" }],
  hostedParties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Party" }],
  attendedParties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Party" }],
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Request" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
