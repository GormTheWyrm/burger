let connection = require("./connection.js");

let ORM = {

  selectAll: function (table, callback) {
    let querystr = "SELECT * FROM " + table + ";";
    connection.query(querystr, function (err, res) {
      if (err) { throw err; }
      else {
        callback(res);
        //this feels like it should be a loop. I hate writing code that doesnt make sense
        //why wont the function work on its own.. will it?
        // console.log(res);
      }
    })
    // I need to figure out how to check if this works!
  },
  insertOne: function (table, col1, col2, val1, val2, callback) {
    let querystr = "INSERT INTO " + table + " (" + col1 + ", " + col2 + ") VALUES(" + val1 + ", " + val2 + ");";
    connection.query(querystr, function (err, res) {
      if (err) { throw err; }
      else {
        callback(res);
      }
    })
  },
  updateOne: function () {

  }


  /*
     * In the `orm.js` file, create the methods that will 
     execute the necessary MySQL commands in the controllers. 
     These are the methods you will need to use in order to 
     retrieve and store data in your database.
       * `selectAll()`
       * `insertOne()`
       * `updateOne()`
     * Export the ORM object in `module.exports`.
  */
};

module.exports = ORM;
//this is not using "?" and so is not secure...