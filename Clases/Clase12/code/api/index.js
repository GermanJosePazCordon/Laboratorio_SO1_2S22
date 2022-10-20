const express = require('express');
var cors = require('cors');
const app = express();
const client = require('../grpc-client/client')

app.use(express.json());
app.use(cors());

app.get('/add-caso', function(req, res){
    // const data_caso = {
    //     name : req.body.name,
    //     location : req.body.location,
    //     age : req.body.age,
    //     infected_type : req.body.infected_type,
    //     state : req.body.state
    // }
    const data_caso = {
        name : "Jose",
        location : "Guatemala",
        age : 21,
        infected_type : "communitary",
        state : "active"
    }
    
    client.AddCaso(data_caso, function(err, response) {
        res.status(200).json({mensaje: response.message})
    });
})

app.get('/listar-caso', function(req, res){
    const rows = [];

    const call = client.ListarCasos();
    call.on('data', function(data) {
        rows.push(data);
    });
    call.on('end', function() {
        console.log('Data obtenida con exito');
        res.status(200).json({data:rows});
    });
    call.on('error', function(e) {
        console.log('Error al obtener la data',e);
    });
})

app.listen(3000,()=>{
    console.log('Server on port', 3000);
}); 