let connection = require("./connection.js");

let ORM = {

  selectAll: function (table, callback) {
    let querystr = "SELECT * FROM " + table + ";";
    connection.query(querystr, function (err, res) {
      if (err) { throw err; }
      else {
        callback(res);  //seems to work; site loads on start
        // console.log(res);
        console.log("retrieving " + res.length + " rows");
      }
    })

  },
  insertOne: function (table, col1, col2, val1, val2, callback) {
    let querystr = "INSERT INTO " + table + " (" + col1 + ", " + col2 + ") VALUES (" + val1 + ", " + val2 + ");";
    connection.query(querystr, function (err, res) {
      if (err) { throw err; }
      else {

        console.log(res.affectedRows + " item created!");
        //this console log works, and data is added.
        // callback(res); this was just causing an error
        callback(res); //does this run a funciton?
        //works now
      }
    })
  },
  updateOne: function (table, col, val, whereCol, whereVal, callback) {
    console.log("testing orm update");
    //updates collumn 2...
    //whereCol is id for this purpose, and most purposes
    let querystr = "UPDATE " + table + " SET " + col + " = " + val + " WHERE " + whereCol + " = " + whereCol + ";";
    connection.query(querystr, function (err, res) {
      // this should be redone with question marks
    });
  },

    //test function
    testInsert: function (table, col1, col2, val1, val2, callback) {
      let querystr = "INSERT INTO burgers (burger_name, devoured) VALUES ('fakeburger', false);";
      connection.query(querystr, function (err, res) {
        if (err) { throw err; }
        else {
          callback(res);
        }
      })
    }



  };

  module.exports = ORM;
//this is not using "?" and so is not secure... right?