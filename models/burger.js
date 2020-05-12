let ORM = require("../config/orm");
//uses ORM to create a burger object, kind of like a class
//this file is exported to burger-controllers.js

//NEED TO BUILD ORM FIRST!



let burger = {
    // oooh, this uses the 
    getAll: function (callback) {
        ORM.selectAll("burgers", function (res) {
            callback(res);
            
        });
    },
    create: function (val1, callback) {
        ORM.insertOne("burgers", "burger_name", "devoured", val1, false, function (res) {
            // console.log("burger create function ran in burger.js");
            callback();
            //I honestly dont know what the callback is for but I'm afraid if I remove it it will break again
        });
        
    },
    devour: function (burgerId, callback) {
        burger.updateOne("burgers", "devoured", true, "id", burgerId);
    }

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;