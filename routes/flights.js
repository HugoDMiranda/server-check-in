const express = require("express");
const {
  getFlights,
  seeFlightPassangers,
  seeFlightTeam,
  flight,
} = require("../controllers/flights.js");

const router = express.Router();

router.get("/", getFlights);
router.get("/passengers", seeFlightPassangers);
router.get("/team", seeFlightTeam);
router.get("/:number", flight);

module.exports = router;
