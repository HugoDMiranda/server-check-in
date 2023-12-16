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

//
const seePas = async (req, res) => {
  const { name } = req.body;
  const pas = await PassengersModel.findOne({ name });

  res.json(pas);
};

module.exports = {
  getPassengers,
  addCheckin,
  seePas,
};
