const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    if(!token) {
      return res.status(401).send({message: "unauthorized"})
    }
    jwt.verify(token, "9be97148a4f8f3842c17dcb4fefb1852a5ef708d529ebbcecfe4c8550eb568fbe75cca30502db05d85003c364c990e69b61adac9377a8b40bc39b9bdd1d8eb09", function(err, decoded) {
      if(err) {
        return res.status(403).send({message: "forbiden access"})
      }
      req.user = decoded
    });

    next()
  }


  module.exports = verifyToken