const BookModel = require('../model/book.js');

module.exports.all_books = (req, res)=>{

    BookModel.find((err, results)=>{
        if(err)
            console.log(err);
        else
            res.json(results);
    });
}


module.exports.get_book = (req, res)=>{
    const id = req.params.id;

    BookModel.findById(id, (err, results)=>{
        if(err)
            res.status(400).json({Message:'Book with ID number '+id+' not found'});
        else
            res.json({Message:'results', results});
    });
}

module.exports.update_book = (req, res)=>{
    const id = req.params.id;

    BookModel.findByIdAndUpdate(id, req.body, (err, results)=>{
        if(err)
            res.status(400).json({Message:'Book with id-'+id+' could not be updated'});
        else
            res.json({Message:'results', results});
    });
}

module.exports.delete_book = (req, res)=>{
    const id = req.params.id;

    BookModel.findByIdAndDelete(id, (err, results)=>{
        if(err)
            res.json({Message:'book with id-'+id+' is not deleted'});
        else
            res.json({Message:'results deleted', results});
    });
}
