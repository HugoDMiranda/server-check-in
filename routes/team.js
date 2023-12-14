const express = require("express");
const { getTeam, addTeam } = require("../controllers/team.js");

const router = express.Router();

router.get("/", getTeam);
router.post("/", addTeam);

module.exports = router;
