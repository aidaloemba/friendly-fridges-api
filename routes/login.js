const express = require("express");
const app = express();
const User = require("../models/user");
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  let data = {};
  res.json("login", data);
});

app.post("/", (req, res, next) => {
  if (req.body.email === "" || req.body.password === "") {
    res.json("login", {
      errorMessage: "Please enter both, email and password to log in.",
    });
    return;
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(500)
        res.json({
          errorMessage: "The user does not exist.",
        });
      } else {

      bcrypt.compare(req.body.password, user.password, function (err, match) {
        if (match) {
          req.session.currentUser = user;
          res.json({email:user.email});
        } else {
            res.status(500)
            res.json({
            errorMessage: "Incorrect credentials.",
          });
        }
      });
    }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = app;