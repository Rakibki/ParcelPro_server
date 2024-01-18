const { Schema, model } = require("mongoose");

const bookingScheme = new Schema({
  email: {
    // required: true,
    type: String,
  },
  name: {
    // required: true,
    type: String,
  },
  phoneNumber: {
    // required: true,
    type: String,
  },
  parcelYype: {
    // required: true,
    type: String,
  },
  parcelWeight: {
    // required: true,
    type: String,
  },
  ReceiverName: {
    // required: true,
    type: String,
  },
  ReceiverNumber: {
    // required: true,
    type: String,
  },
  DeliveryAddress: {
    // required: true,
    type: String,
  },
  RequestedDate: {
    // required: true,
    type: String,
  },
  DeliveryAddressLatitude: {
    // required: true,
    type: String,
  },
  DeliveryAddresslongitude: {
    // required: true,
    type: String,
  },
  price: {
    // required: true,
    type: Number,
  },
  status: {
    // required: true,
    type: String,
  },
  delivaryMenId: {
    // required: true,
    type: String,
  },
  DeliveryDate: {
    // required: true,
  },
});


const booking = model("bookingsCollection", bookingScheme)

module.exports = booking