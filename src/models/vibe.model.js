import mongoose from "mongoose";

const vibeSchema = new mongoose.Schema({
    currentVibe: { type: String },
    date: { type: Date },
    expiry: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

export const Vibe = mongoose.model("Vibe", vibeSchema);