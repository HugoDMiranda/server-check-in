const express = require("express");
const { getFlights, seeF } = require("../controllers/flights.js");

const router = express.Router();

router.get("/", getFlights);
router.post("/seeF", seeF);

module.exports = router;
