const services = require("../../models/services");

const getAllServices = async (req, res) => {
  const result = await services.find();
  res.send(result);
};

module.exports = getAllServices;
