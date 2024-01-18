const booking = require("../../models/bookings");




const updateParcel = async (req, res) => {
    const id = req.params?.id;
    const data = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: {
        phoneNumber: data.phoneNumber,
        parcelYype: data.parcelYype,
        parcelWeight: data.parcelWeight,
        ReceiverName: data.ReceiverName,
        ReceiverNumber: data.ReceiverNumber,
        DeliveryAddress: data.DeliveryAddress,
        RequestedDate: data.RequestedDate,
        DeliveryAddressLatitude: data.DeliveryAddressLatitude,
        DeliveryAddresslongitude: data.DeliveryAddresslongitude,
      },
    };
    const result = await booking.updateOne(filter, updateDoc);
    res.send(result);
  }



  module.exports = updateParcel