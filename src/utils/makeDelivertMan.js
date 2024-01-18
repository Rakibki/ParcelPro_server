const users = require("../models/users");

const makeDeliveryMan = async (req, res) => {
  const id = req.params?.id;
  const filter = { _id: new ObjectId(id) };
  const result = await users.findOneAndUpdate(filter, {
    $set: {
      role: "Delivery_Men",
    },
  });
  return result;
};


module.exports = makeDeliveryMan