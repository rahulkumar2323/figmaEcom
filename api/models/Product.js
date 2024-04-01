const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    images: { type: Array },
    imgShow: String,
    imgbg: String,
    title: { type: String },
    para1: String,
    para2: String,
    tag: String,
    price: { type: Number },
  },
  { timestamps: true }
);

ProductSchema.index({ title: "text" });

module.exports = mongoose.model("Product", ProductSchema);
