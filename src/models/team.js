const { Schema, model } = require("mongoose");

const teamScheme = new Schema({
  imgae: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    // required: true,
  },
  position: {
    type: String,
    // required: true,
  },
});

const team = model("team", teamScheme);
module.exports = team;
