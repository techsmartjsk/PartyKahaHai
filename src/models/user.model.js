import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  sub: { type: String, required: true, unique: true },  // Unique user identifier
  email: { type: String},
  name: { type: String },
  dateOfBirth: { type: Date },  // Auto-calculates age
  gender: { 
    type: String, 
    enum: ["Male", "Female", "Other", "Prefer Not to Say"] 
  },
  designation: { type: String },
  company: { type: [String] },
  profilePicture: { type: String }, 

  whyHere: [{ 
    type: String, 
    enum: [
      "Partying", "Socializing", "Making new friends", "Finding Activity Partners",
      "Hosting Events", "Attending Events", "Exploring Local Spots", "Building a Community"
    ] 
  }],

  hobbies: [{ type: String }],

  locationStatus: { 
    type: String, 
    enum: [
      "Moved to Town", "New To Town", "Native of this Town", "Long Term Resident", 
      "Temporary Visitor", "Frequent Visitor", "Tourist"
    ] 
  },
  location: { 
    type: { lat: Number, lng: Number },  // GPS Coordinates 
    default: null 
  },

  alcohol: { type: String, enum: ["Yes", "No", "Sometimes", "Rarely", "Socially"] },
  smoking: { type: String, enum: ["Yes", "No", "Sometimes", "Rarely", "Socially"] },

  tagline: { type: String, maxlength: 60 },
  prompts: [
    { question: String, answer: String }  // Stores user prompt-answer pairs
  ],
  education: { type: String },

  haveKids: { type: Boolean },

  exerciseFitness: { 
    type: String, 
    enum: ["Active", "Moderately Active", "Trying to be Active", "Not Active"] 
  },

  religion: { 
    type: String, 
    enum: [
      "Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain", 
      "Agnostic", "Atheist", "Others", "Prefer not to say"
    ] 
  },

  pictures: [{ type: String }],

  verified: { type: Boolean, default: false },

  socialMediaLinks: {
    instagram: { type: String },
    twitter: { type: String },
    facebook: { type: String }
  },

  role: { type: String, required: true },
  chatRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" }],
  hostedParties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Party" }],
  attendedParties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Party" }],
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Request" }]
});

export const User = mongoose.model("User", userSchema);
