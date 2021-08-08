const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/niclib',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('close',console.error.bind(console,'genre database is not connected'));
db.on('open',()=>{
    console.log('genre database is open');
});

const Schema = mongoose.Schema;
const GenreSchema = new Schema({
    name:{type: String, required:true}
});

module.exports = mongoose.model('Genre', GenreSchema);