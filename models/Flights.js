const mongoose = require("mongoose");

const flightsSchema = new mongoose.Schema(
  {
    origin: { type: String },
    destination: { type: String },
    course: { type: String },
    departure: { type: String },
    shipment: { type: String },
    class: { type: String },
    number: { type: String },
    team: { type: Array, default: [] },
    passengers: { type: Array, default: [] },
  },
  {
    collection: "flights",
  }
);

const FlightsModel = mongoose.model("flights", flightsSchema);

module.exports = FlightsModel;
