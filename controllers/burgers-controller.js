// this file routes the client...
const express = require("express"); //server stuff...module
let router = new express.Router;      //hopefully this links router with servers router...
//...I had to add "new" to make this work

let burger = require("../models/burger.js");  //imports burger model;



// ...13_16 example is helpful... MVC Example!
// look up express.router


router.get("/", function (req, res) {

  //note; burger is the model we pulled earlier!
  burger.getAll(function (data) {
    let handlebarObject = {
      // need to define this stuff accordian to burger model... which I need to write!
      burger: data
      //how to get this data... why is this one plural?
    };
    console.log(handlebarObject);
    res.render("index", handlebarObject);
    // res.render('main', {layout : 'index'});   // alt code from online, testing; their main and index are opposite mine
    // es.render (‘main’, {layout: ‘index’, key1: val1, key2: val2… keyn: valn});
  });
});
router.get("/api/burgers", function (req, res) {

  //note; burger is the model we pulled earlier!
  burger.getAll(function (data) {
    return res.json(data);
  });
});

// router.post("/api/burgers", function (req, res) {
router.post("/api/burgers", function (req, res) {
  //burger create function
  burgerName = `'${req.body.submitField.trim()}'`;
  burger.create(burgerName, //function(1var)
  function(){
    console.log("testing whether this function is passed at all");
    //good, seems to pass after data created
  res.redirect("/"); //it worked!
  })
   //needs to reroute
   // res.json({ id: result.insertId }); no result here...
   // looks like orm function is supposed to send id back... ?
   //this successfully runs the function to isert a new data entry in my database...
   //...but then what? it just dies
   // does this have to be done client end? 
   // 
   //... this has been posting twice occasionally- I think its resending data after a timeout
   //...its trying to send the page to /api/burgers... or something
   // maybe if i just send some data it will know it worked?
  //  res.json({});
   
//orm logs "1 item created"
//burger logs nothing
});

router.put("/api/burgers/:id", function (req, res) {
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


