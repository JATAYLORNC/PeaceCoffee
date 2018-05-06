//----------------------------------------------------------//
//                                                          //
//          USE THIS CONTROLLER FOR ALL HTML ROUTES          //
//                                                          //
//----------------------------------------------------------//

//define dependencies
var express = require("express");
var db = require("../models");
var path = require("path");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function(app, passport) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/homepage", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  
  app.get("/payments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/payments.html"));
  });
  
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });
  
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/products.html"));
  });
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });
  
};