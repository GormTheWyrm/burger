// dependencies and requires
const express = require("express");
let Handlebars = require("express-handlebars");
const ORM = require("./config/orm.js");
// orm will...


 // ~~~~~~
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory to be served
app.use(express.static("/public"));
// point the above at the folder with my static css files and stuff... probably nee it...
//...once I figure out what folder to point it to...

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", Handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// set up routes...
let routes = require("./controllers/burgers-controller.js");
app.use(routes);








// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




