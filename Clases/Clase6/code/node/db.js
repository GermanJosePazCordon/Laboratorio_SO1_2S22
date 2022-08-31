var mysql = require('mysql')
var conn = mysql.createConnection({
    host: '23.251.159.100',
    user: 'root',
    password: 'root',
    database: 'dbclase6',
    port: '3306'
 })
conn.connect(function(err){
    if(err)throw err
    console.log("Conn Mysql")
})

module.exports = conn;