const booking = require("../../models/bookings");


const getSingleParcel = async (req, res) => {
    const id = req.params?.id;
    const query = { _id: new ObjectId(id) };
    const result = await booking.findOne(query);
    res.send(result);
  }


  module.exports = getSingleParcel