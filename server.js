const express = require("express");
const route = require("./router.js");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use("/", route);

app.get("/", (req, res) => {
  res.send("<h1>HOMEPAGE</h1>");
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);
