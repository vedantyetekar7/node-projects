const express = require("express");
const route = express.Router();
const MOCK_DATA = require("./MOCK_DATA.js");

// GET REQUEST
route.get("/userdetails", (req, res) => {
  res.send(MOCK_DATA);
});

// POST REQUEST
route.post("/userdetails", (req, res) => {
  const newUser = req.body;
  MOCK_DATA.push(newUser);
  res.json(MOCK_DATA);
});

route.get("/userdetails/:id", (req, res) => {
  const user_id = Number(req.params.id);
  const get_user = MOCK_DATA.find((user) => user.id === user_id);
  if (!get_user) res.status(505).send("User doesn't exist.");
  else res.json(get_user);
});

module.exports = route;
