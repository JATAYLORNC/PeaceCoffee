//Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
//Requring passport as we've configured it
var passport = require("./config/passport");

require("dotenv").config();

//create instance of express server and define port
var app = express();
var port = process.env.PORT || 3000;

//requiring our models for syncing
var db = require("./models");

// Parse application/x-www-form-urlencoded and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//dependency for node express handlebars
var exphbs = require("express-handlebars");

//define engine for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controllers/peace_controller.js")(app);
require("./controllers/coffee_controller.js")(app);
require("./controllers/auth_controller.js")(app);

//sync the models
db.sequelize.sync({force: true}).then(function() {
  //listen on port
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});