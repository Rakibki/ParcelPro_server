const { Schema, model } = require("mongoose");

const servicesScheme = new Schema({
  title: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    // required: true,
  },
  desc: {
    type: String,
    // required: true,
  },
});

const services = model("services", servicesScheme);
module.exports = services;
