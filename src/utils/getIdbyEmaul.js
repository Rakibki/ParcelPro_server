const users = require("../models/users");

const getIdbyEmail = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  const user = await users.findOne(filter);
  const userId = user._id;
  res.send({ userId });
};


module.exports = getIdbyEmail