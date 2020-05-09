//connects to mysql
//next go to ORM object in orm.js

// Require mysql
const mysql = require("mysql");

// Set up our connection information
let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "123",
  database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;