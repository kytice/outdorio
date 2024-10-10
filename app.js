require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./app_server/config/db");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "pug");

// Routes
const indexRouter = require("./app_server/routes/index");

app.use("/", indexRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
