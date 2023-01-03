const router = require("express").Router();
// const upload = multer({ dest: "public/images" });
const User = require("../models/User");
const fs = require("fs");
const { upload, location } = require("../config/multer");
const multer = require("multer");

// const { upload, location } = require("../config/multer");

router.get = async (req, res) => {
  res.send("Hello from API");
};

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({
      profile_picture: `http://localhost:3000/images/${req.file.filename}}`,
    });
    res.json(user);
    // create image in public/images
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = router;
