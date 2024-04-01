const router = require("express").Router();
const User = require("../models/User.js");
const crytojs = require("crypto-js");
const jwt = require("jsonwebtoken");

// register
router.post("/register", async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: crytojs.AES.encrypt(
      req.body.password,
      process.env.PASSSEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }

    const hashedPassword = crytojs.AES.decrypt(
      user.password,
      process.env.PASSSEC
    );
    const passwordOriginal = hashedPassword.toString(crytojs.enc.Utf8);

    if (passwordOriginal !== req.body.password) {
      return res.status(401).json("Wrong credentials!");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
