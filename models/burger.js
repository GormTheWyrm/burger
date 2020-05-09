let ORM = require("../config/orm");
//uses ORM to create a burger object, kind of like a class
//this file is exported to burger-controllers.js

//NEED TO BUILD ORM FIRST!

/*

In `models`, make a `burger.js` file.
    * Inside `burger.js`, import `orm.js` into `burger.js`
    * Also inside `burger.js`, create the code that will call
    * the ORM functions using burger specific input for the ORM.
    * Export at the end of the `burger.js` file.

*/

let burger = {
    // oooh, this uses the 
    getAll: function (callback) {
        ORM.selectAll("burgers", function (res) {
            callback(res);
        });
},

/*
// ~~ reference below!
    all: function (callback) {
        orm.all("burgers", function (res) {    //why plural here?
            callback(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("cats", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function (res) {
            cb(res);
        });
    }

    */
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;