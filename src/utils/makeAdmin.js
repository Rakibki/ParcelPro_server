const users = require("../models/users");



const makeAdmin = async (req, res) => {
    const id = req.params?.id;
    const filter = { _id: new ObjectId(id) };
    const result = await users.findOneAndUpdate(filter, {
      $set: {
        role: "admin",
      },
    });
    return result;
  }


  module.exports = makeAdmin