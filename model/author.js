const mongoose = require('mongoose');
const DateTime = require('luxon');

//The libdb is the name of the database we created @ mongodb
mongoose.connect('mongodb://127.0.0.1:27017/niclib',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('close',console.error.bind(console,'author database is not connected'));

db.on('open',()=>{
    console.log('author database is connected');
});

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name:{type:String, min:2, required:true},
    family_name:{type:String, min:2, required:true},
    date_of_birth:{type:Date, required:true},
    date_of_death:{type:Date}
});

AuthorSchema
.virtual('name')
.get(function(){
    return this.family_name + ' ' + this.first_name;
});

AuthorSchema.virtual('lifespan').get(function(){
    let lifespan_string = '';
    if(this.date_of_birth){

        //https://www.npmjs.com/package/luxon i used luxon to do the date formating
        // if you dont understand see me for more information
        //https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting to understand more of this date format
        
        lifespan_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    }

    lifespan_string ='-';
    if(this.date_of_death){
        lifespan_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
    }

    return lifespan_string;
});




module.exports = mongoose.model('Author',AuthorSchema);