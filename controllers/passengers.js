const PassengersModel = require("../models/Passengers.js");

//Get all passengers
const getPassengers = async (req, res) => {
  try {
    const result = await PassengersModel.find({});
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//Check-in
const addCheckin = async (req, res) => {
  const passenger = req.body;
  const newPassanger = new PassengersModel(passenger);
  await newPassanger.save();

  res.json(passenger);
};

module.exports = {
  getPassengers,
  addCheckin,
};
