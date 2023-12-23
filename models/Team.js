const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String },
    gender: { type: String },
    position: { type: String },
  },
  {
    collection: "team",
  }
);

const TeamModel = mongoose.model("team", teamSchema);

module.exports = TeamModel;
