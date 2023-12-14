const TeamModel = require("../models/Team.js");

//Get all teams
const getTeam = async (req, res) => {
  try {
    const result = await TeamModel.find({});
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//Check-in
const addTeam = async (req, res) => {
  const team = req.body;
  const newTeam = new TeamModel(team);
  await newTeam.save();

  res.json(team);
};

module.exports = {
  getTeam,
  addTeam,
};
