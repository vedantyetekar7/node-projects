const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Express Form" });
});

app.post("/form_submit", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);
