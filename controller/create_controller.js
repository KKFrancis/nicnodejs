const Joi = require('joi');
const Author = require('../model/author.js');
const Genre = require('../model/genre.js');
const Book = require('../model/book.js')
const BookInstance = require('../model/bookinstance');


module.exports.ceate_obj = (req, res)=>{
    
    //This code below save author into the database through the model
    //validating it using joi date_of_death is wrong so correct it before running it

    // const a_schema = Joi.object({
    //     first_name:Joi.string()
    //                 .min(2)
    //                 .required(),
    //     family_name:Joi.string()
    //                 .min(2)
    //                 .required(),
    //     date_of_birth:Joi.date()
    //                     .required(),
    //     date_of_dirth:Joi.date()
                        
    // });

    // const a_val = a_schema.validate(req.body);
    // if(a_val.error){
    //     res.status(400).send(a_val.error.details[0].message);
    // }


    const author = new Author({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death
    });

    author.save((err, results)=>{
        if(err)
            console.log(err);
        else
            res.json({Message:'Author database results', results});
    });

    
    //this code below save genre into the database through the model
    
    // const genre_schema = Joi.object({
    //     name:Joi.string()
    //             .min(3)
    //             .required()
    // });

    // const g_result = genre_schema.validate(req.body);
    // if(g_result.error){
    //         res.status(400).send(g_result.error.details[0].message);
    // }

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

    // const book_schema = Joi.object({
    //     title:Joi.string()
    //             .required(),
    //     summary:Joi.string()
    //             .min(10)
    //             .max(100)
    //             .required(),
    //     isbn: Joi.string()
    //             .min(10)
    //             .max(10)
    //             .required()
    // });

    // const b_val = book_schema.validate(req.body);
    // if(b_val.error){
    //     res.status(400).send(b_val.error.details[0].message);
    // }

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

    // const bookinstance_schema = Joi.object({
    //     imprint:Joi.string()
    //             .required(),
    //     status:Joi.string()
    //             .min(6)
    //             .required(),
    //     due_back:Joi.date()
    //             .required()
    // });
    // const bi_val = bookinstance_schema(req.body);
    // if(bi_val.error){
    //     res.status(400).send(bi_val.error.details[0].message);
    // }


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