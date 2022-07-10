const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
  console.log(
    `Request Date: ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
  );
  next();
});

app.use((req, res, next) => {
  let staticPath = path.join(__dirname, "static", req.url);
  fs.stat(staticPath, (error, fileInfo) => {
    if (error) {
      next();
      return;
    }
    if (fileInfo.isFile()) {
      res.sendFile(staticPath);
    } else {
      next();
    }
  });
});

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>ERROR 404: File not found.</h1>`);
});

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${PORT}/`)
);
