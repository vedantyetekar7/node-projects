const express = require("express");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

// -------------------------------------------------------------------------------------------------------------------------------

/*
app.use(morgan("combined"));
// tokens in morgan
app.use(morgan(":method"));
app.use(morgan(":status"));
app.use(morgan(":url"));
app.use(morgan(':"HTTP/:http-version"'));
*/

// -------------------------------------------------------------------------------------------------------------------------------

/*
const assignId = (req, res, next) => {
    req.id = uuidv4();
  next();
};

morgan.token("id", (req) => {
    return req.id;
});
morgan.token("param", (req, res, param) => "userToken");

app.use(assignId);
app.use(morgan(":id :param"));
*/

// -------------------------------------------------------------------------------------------------------------------------------

/*
let accessLoginStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
  { flags: "w" }
);

// app.use(
//   morgan(":id :param :method :status :url", { stream: accessLoginStream })
// );
app.use(morgan("combined", { stream: accessLoginStream }));
*/

// -------------------------------------------------------------------------------------------------------------------------------

app.get("/", (req, res) => {
  res.end(`<h1>MORGAN LOGGER APP</h1>`);
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);
