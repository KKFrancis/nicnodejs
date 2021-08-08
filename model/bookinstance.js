const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/niclib',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('close',console.error.bind(console,'book instance database is not connected'));
db.on('open',()=>{
    console.log('book instance database is open');
});

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
    book:{type:Schema.Types.ObjectId, ref:'Book', required:true},
    imprint:{type:String, required:true},
    status:{type:String, required:true, enum:['Available','Loaned','Maintenance','Reserved'], default:'Available'},
    due_back:{type:Date, default:Date.now()}
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);