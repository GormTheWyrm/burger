const express = require("express");
//imports burger model;
let burger = require("../models/burger.js");
let router = new express.Router;      //hopefully this links router with servers router...


// ...13_16 example is helpful... MVC Example!
// look up express.router

// This file will act as a router, directing client to routes, and providing functions for those routes
// Thus it needs to import the burger model (which is essentially a burger clas...)



//routes:
//get; how will the app sort burgers? do I need 2 gets or is sorting done client side?
//...lets go with 1 route that gets info...


router.get("/", function (req, res) {

    //note; burger is the model we pulled earlier!
    burger.getAll(function(data) {
      var handlebarObject = {
        // need to define this stuff accordian to burger model... which I need to write!
        testBurgers: data
      };
      console.log(handlebarObject);
      res.render("index", handlebarObject);
      // res.render('main', {layout : 'index'});   // alt code from online, testing; their main and index are opposite mine
    });
});

router.post("/api/burgers", function (req, res) {
//burger create function
});

router.put("/api/burgers/:id", function(req, res) {
// update burger function
});

/*

1. Inside your `burger` directory, create a folder named
`controllers`.
2. In `controllers`, create the `burgers_controller.js` file.
3. Inside the `burgers_controller.js` file,
 import the following:
   * Express
   * `burger.js`
4. Create the `router` for the app, and export the
`router` at the end of your file.

*/

module.exports = router;



//current error; "Expecting 'OPEN_INVERSE_CHAIN', 'INVERSE', 'OPEN_ENDBLOCK', got 'EOF'
 //   at Parser.parseError"
 // ran fine with a blank index.handlebars