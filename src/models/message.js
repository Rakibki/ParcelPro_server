const { Schema, model } = require("mongoose");

const messageScheme = new Schema({
  text: {
    // required: true,
    type: String,
  },
  email: {
    // required: true,
    type: String,
  },
  date: {
    // required: true,
    type: String,
  },
});

const message = model("messageCollection", messageScheme)

module.exports = message