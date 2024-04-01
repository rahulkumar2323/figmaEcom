const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRoute = require("./routes/userRoute.js");
const authRoute = require("./routes/authRoute.js");
const productRoute = require("./routes/productRoute.js");
const cartRoute = require("./routes/cartRoute.js");
const orderRoute = require("./routes/orderRoute.js");
const stripe = require("./routes/stripe.js");

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("db connection successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripe);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
