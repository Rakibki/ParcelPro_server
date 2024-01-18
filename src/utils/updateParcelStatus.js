const booking = require("../models/bookings");
const message = require("../models/message");




const updateParcelStatus = async (req, res) => {
    const bookingId = req.params.bookingId;
    const { status } = req.body;
    const filter = { _id: new ObjectId(bookingId) };
    const parcel = await booking.findOne(filter);
    const result = await booking.findOneAndUpdate(filter, {
      $set: {
        status: status,
        delivaryMenId: " ",
      },
    });
    const user = {
      text: "Your parcel has been cancelled",
      email: parcel?.email,
      date: new Date().toLocaleDateString(),
    };
    const result3 = await message.insertOne(user);
    res.send({ result, result3 });
  }



  module.exports = updateParcelStatus