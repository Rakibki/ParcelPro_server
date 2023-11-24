const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 4000;
require('dotenv').config()
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


const app = express();

app.use(cookieParser())
app.use(express.json())
app.use(cors({
  credentials: true,
  origin: ['http://127.0.0.1:5173', "http://localhost:5173"]
}))

app.get("/", (req, res) => {
    res.send("percel is running")
})

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const database = client.db("parcel_Management");
    const userCollection = database.collection("users");

    // vefifyToken
    const verifyToken = (req, res, next) => {
      const token = req?.cookies?.token;
      if(!token) {
        return res.status(401).send({message: "unauthorized"})
      }
      jwt.verify(token, process.env.JWTSECRET, function(err, decoded) {
        if(err) {
          return res.status(403).send({message: "forbiden access"})
        }
        req.user = decoded
      });

      next()
    }

    // vefifAdmin
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

    //verifyDelivery_Men
    const verifyDelivery_Men = async (req, res, next) => {
      const email = req?.user?.logginUser
      const filter = {email: email}
      const user = await userCollection.findOne(filter);
      if(user?.role == 'Delivery_Men') {
       return next()
      }else{
        return  res.status(403).send({message: "forbidden access"})
      }
    }

    // create Token
    app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWTSECRET, { expiresIn: '1h' });
      res
      .cookie('token', token, {
        secure: true,
        httpOnly: false,
      })
      .send({message: "success"})
    })

    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result)
    })


    // remove token
    app.post("/jwt", (req, res) => {
      console.log("fiittt");
      res.clearCookie('token', {maxAge: 0}).send({massage: "successssss"}) 
    })

    app.get("/getRole/:email", async (req, res) => {
      const email = req.params.email;
      const filter = {email: email}
      const result = await userCollection.findOne(filter);
      res.send(result)
    })


    app.post('/users', async (req, res) => {
      const user = req.body
      const filter = {email: user?.email}
      const isExgisting = await userCollection.findOne(filter)
      if(isExgisting) return res.status(401).send({message :"user already save in db"})
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log("server is running");
})