const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  position: { type: String, required: true },
});

const TeamModel = mongoose.model("Team", teamSchema);

module.exports = TeamModel;
