// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ikc7jeksou9n2xp5",
  password: "kywe7fu1bpzff6el",
  database: "soyowvmg88ejj7ke"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
