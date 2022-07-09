const express = require("express");
const router = express.Router();

const userCredentials = {
  email: "ursvedantyetekar@gmail.com",
  password: "test@123",
};

router.post("/login", (req, res) => {
  if (
    req.body.email == userCredentials.email &&
    req.body.password == userCredentials.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/route/dashboard");
  } else {
    res.send("<h3>Invalid Username</h3>");
  }
});

const dashboardData = {
  title: "Login System",
};

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user, ...dashboardData });
  } else {
    res.send("Unauthorized user");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.send("<h2>ERROR 404: Not Found</h2>");
    } else {
      res.render("base", { logout: "Logout successful.", ...dashboardData });
    }
  });
});

module.exports = router;
