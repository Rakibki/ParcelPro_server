const users = require("../../models/users");


const createUser = async (req, res) => {
  const user = req.body;
  const filter = { email: user?.email };
  const isExgisting = await users.findOne(filter);
  if (isExgisting) {
    return res.status(401).send({ message: "user already save in db" });
  } else {
    const result = await users.insertOne(user);
    return res.send(result);
  }
};

module.exports = createUser