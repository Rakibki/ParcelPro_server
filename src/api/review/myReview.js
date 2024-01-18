const review = require("../../models/review");
const users = require("../../models/users");

const myReview = async (req, res) => {
  const email = req.params?.email;
  const deviveryMan = await users.findOne({ email: email });
  const ObjectId = deviveryMan._id;
  const justId = ObjectId.toString();
  const filter = { deviveryManId: justId };
  const result = await review.find(filter) //.toArray();
  res.send(result);
};

module.exports = myReview;
