const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, "public");
const assetsPath = path.join(publicPath, "assets");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/static", express.static(publicPath));
app.use("/assets", express.static(assetsPath));

const baseData = {
  title: "Login System",
};

app.get("/", (req, res) => {
  res.render("base", { baseData });
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);
