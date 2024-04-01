const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRoute = require("./routes/userRoute.js");
const authRoute = require("./routes/authRoute.js");
const productRoute = require("./routes/productRoute.js");
const cartRoute = require("./routes/cartRoute.js");
const orderRoute = require("./routes/orderRoute.js");
const stripe = require("./routes/stripe.js");
const path = require("path");

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("db connection successfull!"))
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripe);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
