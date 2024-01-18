const booking = require("../../models/bookings");


const allBookings = async (req, res) => {
    const result = await booking.find() //.toArray();
    res.send(result);
  }

  module.exports = allBookings