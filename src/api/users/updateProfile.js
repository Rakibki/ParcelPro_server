const users = require("../../models/users");

const updateProfile = async (req, res) => {
    const email = req.params.email;
    const { image } = req.body;
    const filter = { email: email };
    const result = await users.findOneAndUpdate(filter, {
      $set: {
        image: image,
      },
    });
    res.send(result);
  }



  module.exports = updateProfile