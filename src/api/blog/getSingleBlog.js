const blogs = require("../../models/blog");

const getSingleBlog = async (req, res) => {
  const id = req.params?.id;
  const result = await blogs.findOne({ blogId: id });
  res.send(result);
};

module.exports = getSingleBlog;
