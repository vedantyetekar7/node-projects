const express = require("express");
const route = express.Router();
let MOCK_DATA = require("./MOCK_DATA.js");

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

// PUT REQUEST
route.put("/userdetails/:id", (req, res) => {
  const user_id = Number(req.params.id);
  const bodyToUpdate = req.body;
  const userToUpdate = MOCK_DATA.find((user) => user.id === user_id);
  const user_idx = MOCK_DATA.indexOf(userToUpdate);
  if (!userToUpdate) res.status(500).send("User doesn't exist");
  else {
    const final_user_body = { ...userToUpdate, ...bodyToUpdate };
    MOCK_DATA[user_idx] = final_user_body;
    res.send(final_user_body);
  }
});

// DELETE REQUEST
route.delete("/userdetails/:id", (req, res) => {
  const user_id = req.params.id;
  const usersAfterDelete = MOCK_DATA.filter((user) => user.id != user_id);

  if (!usersAfterDelete) res.status(404).send("User doesn't exist.");
  else {
    MOCK_DATA = usersAfterDelete;
    res.send(MOCK_DATA);
  }
});

module.exports = route;
