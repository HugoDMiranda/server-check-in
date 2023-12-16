const express = require("express");
const {
  getPassengers,
  addCheckin,
  seePas,
} = require("../controllers/passengers.js");

const router = express.Router();

router.get("/", getPassengers);
router.post("/checkin", addCheckin);
router.post("/seePas", seePas);

module.exports = router;
