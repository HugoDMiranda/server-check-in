const express = require("express");
const { getTeam, addTeam, seeTeam } = require("../controllers/team.js");

const router = express.Router();

router.get("/", getTeam);
router.post("/addTeam", addTeam);
router.post("/seeTeam", seeTeam);

module.exports = router;
