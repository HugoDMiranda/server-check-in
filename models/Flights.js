const mongoose = require("mongoose");

const flightsSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const FlightsModel = mongoose.model("flights", flightsSchema);

module.exports = FlightsModel;
