const blogs = require("../../models/blog");

const getAllBLog = async (req, res) => {
  const result = await blogs.find();
  res.send(result);
};

module.exports = getAllBLog;
