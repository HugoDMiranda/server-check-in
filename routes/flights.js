const express = require("express");
const { getFlights, seeFlight } = require("../controllers/flights.js");

const router = express.Router();

router.get("/", getFlights);
router.get("/seeFlight", seeFlight);

module.exports = router;
