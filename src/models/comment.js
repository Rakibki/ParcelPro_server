const { Schema, model } = require("mongoose");

const commentScheme = new Schema({
  blogId: {
    // required: true,
    type: Number,
  },
  id: {
    type: String,
  },
  name: {
    // required: true,
    type: String,
  },
  email: {
    // required: true,
    type: String,
  },
  image: {
    // required: true,
    type: String,
  },
  message: {
    // required: true,
    type: String,
  },
  date: {
    type: String,
  },
});

const comments = model("comments", commentScheme);

module.exports = comments;
