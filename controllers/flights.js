const FlightsModel = require("../models/Flights.js");

//Get all passengers
const getFlights = async (req, res) => {
  try {
    const result = await FlightsModel.find({});
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//
//
const seeF = async (req, res) => {
  const { name } = req.body;
  const F = await FlightsModel.findOne({ name });
  res.json(F);
};
//
module.exports = { getFlights, seeF };
