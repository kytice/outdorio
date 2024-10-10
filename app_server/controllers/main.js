/* GET home page */
const index = function (req, res) {
  res.render("index", { title: "outdorio" });
};

module.exports = {
  index,
};
