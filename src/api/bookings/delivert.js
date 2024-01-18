const booking = require("../../models/bookings");
const message = require("../../models/message");
const users = require("../../models/users");

const delivert = async (req, res) => {
  const { id, deliveryManId } = req.query;
  const filter = { _id: new ObjectId(id) };
  const parcel = await booking.findOne(filter);
  const delivaryman = { _id: new ObjectId(deliveryManId) };
  const options = { upsert: true };
  const result1 = await booking.findOneAndUpdate(filter, {
    $set: {
      status: "deliverd",
    },
  });
  const result2 = await users.findOneAndUpdate(
    delivaryman,
    { $inc: { deliverdCount: 1 } },
    options
  );
  const user = {
    text: "Your product has been delivered",
    email: parcel?.email,
    date: new Date().toLocaleDateString(),
  };
  const result3 = await message.insertOne(user);
  res.send({ result1, result2, result3 });
};


module.exports = delivert