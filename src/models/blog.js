const { Schema, model } = require("mongoose");

const blogScheme = new Schema({
  blogId: {
    // required: true,
    type: Number,
  },
  image: {
    // required: true,
    type: String,
  },
  title: {
    // required: true,
    type: String,
  },
  publishedDate: {
    // required: true,
    type: String,
  },
  author: {
    // required: true,
    type: Object,
  },
  category: {
    // required: true,
    type: String,
  },
  desc: {
    // required: true,
    type: String,
  },
});

const blogs = model("blogs", blogScheme);

module.exports = blogs;
