const booking = require("../../models/bookings");



const deleteBook = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await booking.deleteOne(filter);
    res.send(result);
  }


  module.exports = deleteBook