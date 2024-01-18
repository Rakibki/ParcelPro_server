const booking = require("../../models/bookings");

const updateBook = async (req, res) => {
  const id = req.params?.id;
  const { delivaryMenId, DeliveryDate } = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const result = await booking.findOneAndUpdate(
    filter,
    {
      $set: {
        status: "On The Way",
        delivaryMenId: delivaryMenId,
        DeliveryDate: DeliveryDate,
      },
    },
    options
  );
  res.send(result);
};


module.exports = updateBook