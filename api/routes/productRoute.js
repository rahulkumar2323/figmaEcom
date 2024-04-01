const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken.js");
const Product = require("../models/Product.js");

const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted....");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Product

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All Products

router.get("/", async (req, res) => {
  const query = req.query.tag?.toLowerCase() || "";
  try {
    if (query) {
      const products = await Product.find({
        tag: { $regex: new RegExp("^" + query, "i") },
      });
      res.status(200).json(products);
    } else {
      const products = await Product.find();
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Search

router.get("/search", async (req, res) => {
  try {
    const regex = new RegExp(req.query.q, "i");
    const query = await Product.find({ title: { $regex: regex } });
    res.status(200).json(query);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
