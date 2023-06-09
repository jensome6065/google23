var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/social");
});

/* GET home page. */
router.get("/finance", function (req, res) {
  res.render("finance", {
    title: "Financial Tools",
  });
});
module.exports = router;