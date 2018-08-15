// Dependencies
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

// Initialize express app
const app = express();

// Initialize body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (for heroku deployment)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Initialize and configure our express session
app.use(
  session({
    secret: "big balagan",
    resave: true,
    saveUninitialized: true
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Connect to db
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rxcurator",
  { useNewUrlParser: true }
);

// Start the API server
app.listen(PORT);
