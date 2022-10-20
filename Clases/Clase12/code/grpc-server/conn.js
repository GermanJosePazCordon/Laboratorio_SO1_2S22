var mysql = require("mysql");
var connectionMYSQL = mysql.createConnection({
  host: "23.251.159.100",
  user: "root",
  password: "root",
  database: "dbclase6",
  port: 3306,
});
connectionMYSQL.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conn mysql");
  }
});

module.exports = connectionMYSQL;