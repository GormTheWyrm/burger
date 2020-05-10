//this file starts server. It should work.
// ~~~ ~~~ ~~~

// dependencies and requires
const express = require("express");
const Handlebars = require("express-handlebars");
const ORM = require("./config/orm.js"); 
//...routes declared below

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static("/public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", Handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

let routes = require("./controllers/burgers-controller.js");
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


