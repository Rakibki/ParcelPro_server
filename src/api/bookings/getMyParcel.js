const booking = require("../../models/bookings");

const getMyParcel = async (req, res) => {
  const email = req.params?.email;
  const filter = { email: email };
  const result = await booking.find(filter) //.toArray();
  res.send(result);
};


module.exports = getMyParcel