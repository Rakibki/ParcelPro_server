const users = require("../../models/users");

const usersLength = () => async (req, res) => {
  const filter = { role: "user" };
  const result = await users.countDocuments(filter);
  res.send({ result });
};

module.exports = usersLength