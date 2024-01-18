const users = require("../../models/users");

const getRole = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  const result = await users.findOne(filter);
  res.send(result);
};


module.exports = getRole