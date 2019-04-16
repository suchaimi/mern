const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Body Parser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
// const mclient = require('mongodb');
// Setting Port For Heroku Deployment

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const port = process.env.PORT || 5000;
// DB Config
const db = require("./config/keys").mongoURI;

const options = {
  useNewUrlParser: true,
  dbName: "mern"
};

mongoose.connect(db, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// Passport Middleware
app.use(passport.initialize());
// Passport Config
require("./config/passport")(passport);
app.get("/", (req, res) => res.send("Hello"));
app.listen(port, () => console.log(`Server running on port ${port}`));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
