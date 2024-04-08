const Party = require("../models/party.model");

const createParty = async (req, res) => {
  try {
    const { name, partyTime, partyDate, numberOfAttendees } = req.body;
    const host = req.user;

    const newParty = new Party({
      name,
      partyTime,
      partyDate,
      numberOfAttendees,
      host,
    });

    await newParty.save();

    res
      .status(201)
      .json({ message: "Party created successfully", party: newParty });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getPartiesOfUser = async (req, res) => {
  try {
    const parties = await Party.find({
      host: req.user,
    });
    res.status(200).json(parties);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getParties = async (req, res) => {
  try {
    const parties = await Party.find();
    res.status(200).json(parties);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPartyById = async (req, res) => {
  try {
    const party = await Party.findById(req.params.id);
    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }
    res.status(200).json(party);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateParty = async (req, res) => {
  try {
    const {
      name,
      dateTime,
      ageGroup,
      gender,
      community,
      locality,
      venue,
      dateOfBirth,
      joiningFee,
      companyDesignation,
    } = req.body;

    const party = await Party.findByIdAndUpdate(
      req.params.id,
      {
        name,
        dateTime,
        ageGroup,
        gender,
        community,
        locality,
        venue,
        dateOfBirth,
        joiningFee,
        companyDesignation,
      },
      { new: true },
    );

    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }

    res.status(200).json({ message: "Party updated successfully", party });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteParty = async (req, res) => {
  try {
    const party = await Party.findByIdAndDelete(req.params.id);
    if (!party) {
      return res.status(404).json({ message: "Party not found" });
    }
    res.status(200).json({ message: "Party deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createParty,
  getParties,
  getPartiesOfUser,
  getPartyById,
  updateParty,
  deleteParty,
};
