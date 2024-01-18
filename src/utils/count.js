const booking = require("../models/bookings");
const userss = require("../models/users");

const count = async (req, res) => {
  const users = await userss.estimatedDocumentCount();
  const filter = { status: "deliverd" };
  const ParcelDelivered = await booking.countDocuments(filter);
  const ParcelBooked = await booking.estimatedDocumentCount();
  res.send({ users, ParcelDelivered, ParcelBooked });
};


module.exports = count