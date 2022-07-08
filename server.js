const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;

/*
// middleware
const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

const reqTime = (req, res, next) => {
  req.reqTime = Date.now();
  next();
};

app.use(myLogger);
app.use(reqTime);

app.get("/", (req, res) => {
  res.send(`<h1>Current Time: ${req.reqTime}</h1>`);
});

app.listen(5000, () => console.log(`Server running at http://localhost:5000/`));

// working with static files in express
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.listen(process.env.PORT || port, () =>
console.log(
  `Server running at port http://localhost:${process.env.PORT || port}/`
  )
  );
  
// routing
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

const rawData = {
  id: 1,
  name: "Vedant Yetekar",
  gender: "male",
};

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/about", (req, res) => {
  // res.send(rawData);
  // res.send(JSON.stringify(rawData));
  // res.json(rawData);
  res.sendFile(`${publicPath}/about.html`);
});

app.listen(PORT, () =>
console.log(`Serever running at http://localhost:${PORT}/`)
);

*/

// Template Engine (EJS: Embedded JavaScript)

app.set("view engine", "pug");
const data = {
  title: "HOMEPAGE",
  greet: "Hello",
  name: "Vedant Yetekar",
  college: "VIIT, Pune",
};

app.get("/", (req, res) => {
  res.render("index", data);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Serever running at http://localhost:${PORT}/`)
);
