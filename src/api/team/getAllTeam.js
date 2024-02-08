const services = require("../../models/services");
const team = require("../../models/team");

const getallTeam = async (req, res) => {
  const result = await team.find();
  res.send(result);
};

module.exports = getallTeam;
