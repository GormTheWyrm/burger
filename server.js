// dependencies and requires
const express = require("express");
const Handlebars = require("express-handlebars");
const ORM = require("./config/orm.js");
// orm will...


 // ~~~~~~
let app = express();
let PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "handlebars"); //these 2 lines could be flipped
app.engine("handlebars", Handlebars({ defaultLayout: "main" }));
// alt: {layoutsDir: __dirname + '/views/layouts',    }));
// Static directory to be served
app.use(express.static("/public"));

let routes = require("./controllers/burgers-controller.js");
app.use(routes);


/*
pp.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
defaultLayout: 'planB',
//new configuration parameter
partialsDir: __dirname + '/views/partials/'
}));
app.get('/', (req, res) => {
//Using the index.hbs file instead of planB
res.render('main', {layout: 'index'});});
//note that they change handlebar extension to ".hbs"
*/





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




