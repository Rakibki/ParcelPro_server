const express = require("express");
const getallTeam = require("../../api/team/getAllTeam");
const router = express.Router();

router.get("/team", getallTeam);

module.exports = router;
