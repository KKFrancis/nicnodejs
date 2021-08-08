const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/niclib',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('close',console.error.bind(console,'book database is not connected'));
db.on('open',()=>{
    console.log('book database is open');
});

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{type:String, required:true},
    author:{type:Schema.Types.ObjectId, ref:'Author', required:true},
    summary:{type:String, required:true},
    isbn:{type:String, required:true},
    genre:{type:Schema.Types.ObjectId, ref:'Genre', required:true}
});


module.exports = mongoose.model('Book', BookSchema);