//----------------------------------------------------------//
//                                                          //
//          USE THIS CONTROLLER FOR ALL HTML ROUTES          //
//                                                          //
//----------------------------------------------------------//

//define dependencies
var express = require("express");
var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/members", function (req, res) {
    res.sendFile(path.join(__dirname, "members.html"));   
  });
  
  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });
  
  
  app.get("/payments", function(req, res) {
    res.sendFile(path.join(__dirname, "payments.html"));
  });
  
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "inventory.html"));
  });
  
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "products.html"));
  });
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
  });
  
};