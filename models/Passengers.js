const mongoose = require("mongoose");

const passengersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  chair: { type: String, required: true },
  meal: { type: String, required: true },
  number: { type: String, required: true },
});

const PassengersModel = mongoose.model("passengers", passengersSchema);

module.exports = PassengersModel;
