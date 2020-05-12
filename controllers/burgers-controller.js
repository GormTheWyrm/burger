// this file routes the client...
const express = require("express"); //server stuff module
let router = new express.Router;      //this links router with servers router...
//...I had to add "new" to make this work

let burger = require("../models/burger.js");  //imports burger model;


// ROUTING
router.get("/", function (req, res) {
  burger.getAll(function (data) {
    let handlebarObject = {
      burger: data
    };
    console.log(handlebarObject);
    res.render("index", handlebarObject);
  });
});
router.get("/api/burgers", function (req, res) {

  //note; burger is the model we pulled earlier!
  burger.getAll(function (data) {
    return res.json(data);
  });
});
//perhaps if I give the containers a secret value or something based off of id, 
//I can use that on the put method later!

router.post("/api/burgers", function (req, res) {
  //burger create function
  burgerName = `'${req.body.submitField.trim()}'`;
  burger.create(burgerName, //function(1var)
  function(){
    console.log("testing whether this function is passed at all");
    //good, seems to pass after data created
  res.redirect("/"); //it worked!
  })
//orm logs "1 item created"
//burger logs nothing
});



// NEXT STEP!
router.put("/api/burgers/:id", function (req, res) {
  // update burger function
  // console.log(req.params.id);  //awesome, this function is called!
    //body is empty...
burger.devour(req.params.id, function(){
  res.sendStatus(200);
});


});

/*
Also if you want to redirect in put or delete (to get adress), you can't use normal res.redirect('/path'), 
you should use res.redirect(303, '/path') instead. (source)
If not, you'll get Cannot PUT error.
https://stackoverflow.com/questions/18601922/using-the-put-method-with-express-js
*/

module.exports = router;


