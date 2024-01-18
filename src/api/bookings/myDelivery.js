const booking = require("../../models/bookings");

const myDelivery = async (req, res) => {
  const id = req.params.id;
  const filter = { delivaryMenId: id };
  const result = await booking.find(filter) //toArray();
  res.send(result);
};

module.exports = myDelivery;
