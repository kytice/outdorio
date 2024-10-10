const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Accessing home route");
  res.render("index", { title: "outdorio" });
});

module.exports = router;
