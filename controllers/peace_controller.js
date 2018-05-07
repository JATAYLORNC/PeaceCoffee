//----------------------------------------------------------//
//                                                          //
//          USE THIS CONTROLLER FOR ALL HTML ROUTES          //
//                                                          //
//----------------------------------------------------------//

//define dependencies

var passport = require("../config/passport");
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

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

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
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
  
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/homepage.html"));
  // });
  
};