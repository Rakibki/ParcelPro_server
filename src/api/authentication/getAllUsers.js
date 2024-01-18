const users = require("../../models/users");

const getAllUsers = async (req, res) => {
    const page = parseInt(req?.query?.page)
    const size = parseInt(req?.query?.size)
    const filter = {role: "user"}
    const result = await users.find(filter).skip(page*size).limit(size) //.toArray();
    res.send(result)
  }


  module.exports = getAllUsers