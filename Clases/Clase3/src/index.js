const express = require('express');
const mongoose = require('mongoose');

const DB_URI = `mongodb://localhost:3000/persona` 
const conn = () => {
    mongoose.connect(
        DB_URI,
        (err) => {
            if(err){
                console.log('Err : ', err)
            }else{
                console.log('DB Connection')
            }
        }
    )
}
conn();

const app = express();

app.get('/', function(req, res)
{
    res.send('Server on port 3000')
})

app.get('/info', function(req, res)
{
    res.send('Laboratorio Sistemas Operativos 1')
})

app.get('/db', async function(req, res)
{
    var schema = new mongoose.Schema({name:String, tipo:String});
    var product = mongoose.model('Product', schema);
    await product.create({name:'pd1', tipo:'A'});
    await product.create({name:'pd2', tipo:'B'});

    var data = await product.find();
    res.send(data);
})

app.listen
(
    5000,
    ()=>console.log("Server on port 5000")
)

