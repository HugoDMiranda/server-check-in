const express = require("express");
const {
  getFlights,
  seeFlightPassangers,
} = require("../controllers/flights.js");

const router = express.Router();

router.get("/", getFlights);
router.get("/:number", seeFlightPassangers);

module.exports = router;
