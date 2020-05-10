// this file routes the client...
const express = require("express"); //server stuff...module
let router = new express.Router;      //hopefully this links router with servers router...
//...I had to add "new" to make this work

let burger = require("../models/burger.js");  //imports burger model;



// ...13_16 example is helpful... MVC Example!
// look up express.router


router.get("/", function (req, res) {

    //note; burger is the model we pulled earlier!
    burger.getAll(function(data) {
      var handlebarObject = {
        // need to define this stuff accordian to burger model... which I need to write!
        burgers: data
        //how to get this data... why is this one plural?
      };
      console.log(handlebarObject); 
      res.render("index", handlebarObject);
      // res.render('main', {layout : 'index'});   // alt code from online, testing; their main and index are opposite mine
      // es.render (‘main’, {layout: ‘index’, key1: val1, key2: val2… keyn: valn});
    });
});

router.post("/api/burgers", function (req, res) {
//burger create function
    // cat.create([
    //   "name", "sleepy"
    // ], [
    //   req.body.name, req.body.sleepy
    // ], function(result) {
    //   // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
    // });
    // ...figure this out...
    console.log("this should of posted");
});

router.put("/api/burgers/:id", function(req, res) {
// update burger function
console.log("this should of updated");
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


