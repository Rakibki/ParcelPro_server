const users = require("../../models/users");

const getSimgleUser = async (req, res) => {
  const email = req.params?.email;
  const query = { email: email };
  const result = await users.findOne(query);
  res.send(result);
};


module.exports = getSimgleUser