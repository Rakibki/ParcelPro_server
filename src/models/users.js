const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    // required: true,
    type: String,
  },
  name: {
    // required: true,
    type: String,
  },
  role: {
    // required: true,
    type: String,
  },
  image: {
    // required: true,
    type: String,
  },
  deliverdCount: {
    // required: true,
    type: Number,
  },
});


const users = model("users", userSchema)

module.exports = users
