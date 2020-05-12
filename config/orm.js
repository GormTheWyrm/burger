let connection = require("./connection.js");

let ORM = {

  selectAll: function (table, callback) {
    let querystr = "SELECT * FROM " + table + ";";
    connection.query(querystr, function (err, res) {
      if (err) { throw err; }
      else {
        callback(res);  //seems to work; site loads on start
        // console.log(res);
      }
    })
    // I need to figure out how to check if this works!
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



  testInsert: function (table, col1, col2, val1, val2, callback) {
    let querystr = "INSERT INTO burgers (burger_name, devoured) VALUES ('fakeburger', false);";
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