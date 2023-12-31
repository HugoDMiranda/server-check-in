const express = require("express");
const { getPassengers, addCheckin } = require("../controllers/passengers.js");

const router = express.Router();

router.get("/", getPassengers);
router.post("/checkin", addCheckin);

module.exports = router;
