const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const generateJwt = (id, email, name, role) => {
  return jwt.sign({ id, email, name, role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

router.post("/register", async (req, res) => {
  const user = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
 
  const newUser = new User(user);
  newUser.password = hashedPassword;
  console.log(newUser);
  try {
    newUser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email });
  let comparePassword = bcrypt.compareSync(password, user[0].password);
  try {
    if (comparePassword) {
      {
        const token = generateJwt(
          user[0].id,
          user[0].email,
          user[0].name,
          user[0].role
        );
        const currentUser = {
          ...user,
          token: token,
        };
        console.log(currentUser);
        res.send(currentUser);
      }
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
