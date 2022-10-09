var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/create", function (req, res) {
  var query = connectionMYSQL.query(
    "insert into vehiculos values(" +
      "'" +
      req.body.placa +
      "', '" +
      req.body.marca +
      "', '" +
      req.body.modelo +
      "', '" +
      req.body.serie +
      "', '" +
      req.body.color +
      "')",
    function (error, result) {
      if (error) {
        throw error;
      } else {
        res.send(JSON.stringify(result));
      }
    }
  );
});

app.get("/read", function (req, res) {
  var query = connectionMYSQL.query(
    "select * from vehiculos",
    function (error, result) {
      if (error) {
        throw error;
      } else {
        res.send(JSON.stringify(result));
      }
    }
  );
});

app.post("/update", function (req, res) {
  var flag = true;
  var sql = "update vehiculos ";
  for (let value of req.body.value) {
    if (value.value != "NoChange") {
      if (flag) {
        sql += "set " + value.type + " = '" + value.value + "'";
        flag = false;
      } else {
        sql += ", " + value.type + " = '" + value.value + "'";
      }
    }
  }
  sql += " where placa = '" + req.body.placa + "';";
  console.log(sql);
  var query = connectionMYSQL.query(sql, function (error, result) {
    if (error) {
      throw error;
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.post("/delete", function (req, res) {
  var query = connectionMYSQL.query(
    "delete from vehiculos where placa =" + "'" + req.body.placa + "'",
    function (error, result) {
      if (error) {
        throw error;
      } else {
        res.send(JSON.stringify(result));
      }
    }
  );
});

app.post("/filter", function (req, res) {
  var query = connectionMYSQL.query(
    "select * from vehiculos where " +
      req.body.type +
      " = '" +
      req.body.value +
      "'",
    function (error, result) {
      if (error) {
        throw error;
      } else {
        res.send(JSON.stringify(result));
      }
    }
  );
});

app.post("/user", function (req, res) {
  var query = connectionMYSQL.query(
    `insert into User (name, carnet) values('${req.body.name}', ${req.body.carnet});`,
    function (error, result) {
      if (error) {
        throw error;
      } else {
        res.send(JSON.stringify(result));
      }
    }
  );
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log("App listening at", port);
});
