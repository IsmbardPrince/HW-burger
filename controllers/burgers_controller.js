// set up this express router
var express = require("express");
var router = express.Router();

// import the orm model
var burger = require("../models/burger.js");

// Set Up The Routes And Associated Processing For The App
// default route just redirects to main route
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// main route returns page showing all burgers in the database
router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// create route adds a new burger to the database
router.post("/burgers/create", function(req, res) {
  burger.insertOne([
    "burger_name",
    "devoured"
  ], [
    req.body.burger_name,
    req.body.devoured
  ], function() {
    res.end();
  });
});

// update route changes devoured property of a burger
router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.end();
  });
});

// Export routes for server.js to use.
module.exports = router;
