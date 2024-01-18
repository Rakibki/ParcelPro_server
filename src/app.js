const express = require("express");
const applyMiddlewere = require("./middlewares/applyMiddlewere");
const connectDb = require("./db/connectDb");
const port = process.env.PORT || 4000;
const authenticationRoute = require("./router/authentication/index.js");
const bookingsRoute = require("./router/bookings/index.js");
const messageRoute = require("./router/message/index.js");
const reviewRoute = require("./router/review/index.js");
const usersRoute = require("./router/users/index.js");

const app = express();

applyMiddlewere(app);


app.use(authenticationRoute);
app.use(bookingsRoute);
app.use(messageRoute);
app.use(reviewRoute);
app.use(usersRoute);

app.get("/", (req, res) => {
  res.send("percel is running");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The requsted url invalid ${req.url}`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err?.message,
  });
});

const main = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log("server is running");
  });
};

main();

