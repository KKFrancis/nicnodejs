const Author = require('../model/author.js');
const Genre = require('../model/genre.js');
const Book = require('../model/book.js')
const BookInstance = require('../model/bookinstance');


module.exports.ceate_obj = (req, res)=>{
    
    //This code below save author into the database through the model
    const author = new Author({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        date_of_dirth: req.body.date_of_dirth
    });

    author.save((err, results)=>{
        if(err)
            console.log(err);
        else
            res.json({Message:'Database results', results});
    });

    
    //this code below save genre into the database through the model
    const genre = new Genre({
        name: req.body.name
    });

    genre.save((err, result)=>{
        if(err)
            console.log(err);
        else
            res.json({Message:'genre results', result});
    });

    
    //this code below save book into the database through the model
    const book = new Book({
        title: req.body.title,
        author: author._id,
        summary: req.body.summary,
        isbn: req.body.isbn,
        genre: genre._id
    });

    book.save((err, results)=>{
        if(err)
            console.log(err);
        else
            res.json({Message:'results for book', results});
    });

    //this code below save bookinstance into the database through the model
    const bookinstance = new BookInstance({
        book:book._id,
        imprint:req.body.imprint,
        status:req.body.status,
        due_back:req.body.due_back
    });

    bookinstance.save((err, result)=>{
        if(err)
            console.log(err);
        else
            res.json({Message:'result for book instance', result});
    });
}