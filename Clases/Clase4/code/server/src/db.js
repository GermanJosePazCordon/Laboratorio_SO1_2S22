const mongoose = require('mongoose');
mongoose.connect('mongodb://database/db')
    .then(db => console.log('Db is conected to', db.connection.host))
    .catch(err => console.error(err))