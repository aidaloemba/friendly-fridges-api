const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let data = {};
  res.json("fridge", data);
});



module.exports = app;