const message = require("../../models/message");




const myMessage = async (req, res) => {
    const email = req.params?.email;
    const filter = { email: email };
    console.log(email);
    const result = await message.find(filter) //.toArray();
    res.send(result);
  }


  module.exports = myMessage