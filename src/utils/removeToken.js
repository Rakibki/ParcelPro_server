
const removeToken = (req, res) => {
  res.clearCookie("token", { maxAge: 0 }).send({ massage: "successssss" });
};

module.exports = removeToken;