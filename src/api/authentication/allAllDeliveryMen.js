const users = require("../../models/users");

const allAllDeliveryMen = async (req, res) => {
  const filter = { role: "Delivery_Men" };
  const result = await users.find(filter) //.toArray();
  res.send(result);
};


module.exports = allAllDeliveryMen