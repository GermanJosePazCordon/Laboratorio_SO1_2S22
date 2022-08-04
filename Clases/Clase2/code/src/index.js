const express = require('express');
const app = express();


app.get('/', function(req, res)
{
    res.send('Server on port 3000')
})

app.get('/info', function(req, res)
{
    res.send('Laboratorio Sistemas Operativos 1')
})

app.listen
(
    3000,
    ()=>console.log("Server on port 3000")
)