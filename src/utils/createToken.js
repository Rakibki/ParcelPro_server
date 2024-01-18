const jwt = require("jsonwebtoken");

const createToken = (req, res) => {
  const user = req.body;
  const token = jwt.sign(
    user,
    "9be97148a4f8f3842c17dcb4fefb1852a5ef708d529ebbcecfe4c8550eb568fbe75cca30502db05d85003c364c990e69b61adac9377a8b40bc39b9bdd1d8eb09",
    { expiresIn: "1h" }
  );
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send({ message: "success" });
};

module.exports = createToken;
