var express = require('express')
var conn = require('./db')
var app = express()
app.use(express.json())

app.get('/get', function(req, res){
    var query = conn.query(
        'SELECT * FROM User;',
        function(err, result){
            if(err)throw err
            res.send(result)
        }
    )
})

app.post('/create', function(req, res){
    var query = conn.query(
        `INSERT INTO User (name, carnet) VALUES ('${req.body.name}', ${req.body.carnet})`,
        function(err, result){
            if(err)throw err
            res.send(result)
        }
    )
})

app.listen(
    3000,
    ()=>console.log('Server on port', 3000)
)