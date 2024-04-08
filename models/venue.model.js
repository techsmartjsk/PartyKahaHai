const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
  },
  images: [{ type: String }],
  food: { type: String },
  drinksMenu: [{ type: String }],
  category: { type: String },
  offers: { type: String },
});

venueSchema.index({ location: "2dsphere" });

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
