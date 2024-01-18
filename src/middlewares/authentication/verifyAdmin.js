const verifyAdmin = async (req, res, next) => {
    const email = req?.user?.logginUser
    const filter = {email: email}
    const user = await userCollection.findOne(filter);
    if(user?.role == 'admin') {
     return next()
    }else{
      return  res.status(403).send({message: "forbidden access"})
    }
  }


  module.exports = verifyAdmin