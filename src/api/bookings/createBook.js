const booking = require("../../models/bookings");

const createBook = async (req, res) => {
  const data = req.body;
  const result = await booking.create(data);
  res.send(result);
};


module.exports = createBook