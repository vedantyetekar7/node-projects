const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.set("view engine", "ejs");

app.use("/css", express.static(path.join(__dirname, "assets/css")));
app.use("/js", express.static(path.join(__dirname, "assets/js")));
app.use("/img", express.static(path.join(__dirname, "assets/img")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);
