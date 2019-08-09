const express = require("express");
const router = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");
const uploadCloud = require("../config/cloudinaryConfig");
// require the user model !!!!
const User = require("../models/userModel");

router.post("/signup", uploadCloud.single("image"), (req, res, next) => {
  let newImage;

  if (req.file) {
    newImage = req.file.url;
  } else {
    newImage =
      "https://s3.narvii.com/image/np55bjfcsd2xnhuizfjiox2d3vzkmlzw_hq.jpg";
  }

  console.log("req.body", req.body);
  const userNameVar = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;
  const nickName = req.body.nickName;
  const theImage = newImage;

  if (password != password2) {
    console.log("passwords don't match");
    res.jason({ message: "passwords don't match" });
  }
  if (!userNameVar || !password) {
    console.log("Username and password");
    res.status(400).json({ message: "Provide username and password" });
    return;
  }
  if (password.length < 7) {
    console.log(
      "Please make your password at least 8 characters long for security purposes."
    );
    res
      .status(400)
      .json({
        message:
          "Please make your password at least 8 characters long for security purposes."
      });
    return;
  }
  User.findOne({ username: userNameVar }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }
    if (foundUser) {
      console.log("username taken");
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const aNewUser = new User({
      nickName: nickName,
      username: userNameVar,
      image: theImage,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }
        res
          .status(200)
          .json({ message: "successfully logged in", user: aNewUser });
      });
    });
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      console.log("---123456789098765432345678---", req.user);
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.post("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

router.get("/getcurrentuser", (req, res, next) => {
  if (req.user) {
    console.log(req.user);
    User.findById(req.user._id).populate('favorites')
    .then((theUser)=>{
      res.json(theUser)
    })
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});
module.exports = router;
