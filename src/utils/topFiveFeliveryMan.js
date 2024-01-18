const users = require("../models/users");

const topFiveFeliveryMan = async (req, res) => {
  const filter = { role: "Delivery_Men" };
  const result = await users
    .find()
    .find(filter)
    .sort({ deliverdCount: -1 })
    .limit(5);
  // .toArray()
  res.send(result);
};

module.exports = topFiveFeliveryMan;
