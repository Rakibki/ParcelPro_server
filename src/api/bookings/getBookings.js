const booking = require("../../models/bookings");

const getBookings = async (req, res) => {
  const result = await booking.find() //.toArray();
  res.send(result);
};


module.exports = getBookings