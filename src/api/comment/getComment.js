const comments = require("../../models/comment");

const getComment = async (req, res) => {
  const blogId = req.params.id;
  const result = await comments.find({ blogId: blogId });
  res.send(result);
};

module.exports = getComment;
