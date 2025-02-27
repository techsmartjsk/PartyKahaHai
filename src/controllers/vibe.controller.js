import { Vibe } from "../models/vibe.model.js";

const createVibe = async (req, res) => {
    try {
        const { currentVibe, date, expiry, userId } = req.body;
        const vibe = new Vibe({ currentVibe, date, expiry, userId });
        await vibe.save();
        res.status(201).json({ success: true, message: "Vibe created successfully", vibe });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating vibe", error: error.message });
    }
};

const getVibes = async (req, res) => {
    try {
        const vibes = await Vibe.find().populate("userId", "name email");
        res.status(200).json({ success: true, vibes });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching vibes", error: error.message });
    }
};

const getVibeById = async (req, res) => {
    try {
        const vibe = await Vibe.findById(req.params.id).populate("userId", "name email");
        if (!vibe) return res.status(404).json({ success: false, message: "Vibe not found" });
        res.status(200).json({ success: true, vibe });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching vibe", error: error.message });
    }
};

const updateVibe = async (req, res) => {
    try {
        const vibe = await Vibe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vibe) return res.status(404).json({ success: false, message: "Vibe not found" });
        res.status(200).json({ success: true, message: "Vibe updated successfully", vibe });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating vibe", error: error.message });
    }
};

const deleteVibe = async (req, res) => {
    try {
        const vibe = await Vibe.findByIdAndDelete(req.params.id);
        if (!vibe) return res.status(404).json({ success: false, message: "Vibe not found" });
        res.status(200).json({ success: true, message: "Vibe deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting vibe", error: error.message });
    }
};

export const vibeController = {
    createVibe,
    getVibes,
    getVibeById,
    updateVibe,
    deleteVibe
};
