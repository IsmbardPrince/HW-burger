// import the ORM methods
var orm = require("../config/orm.js");

// define the burger model; all methods, cb parameter is callback
var burger = {
  // returns everything
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // cols and vals parameters are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // objColVals properties map to columns and their values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = burger;
