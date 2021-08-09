const AuthorModel = require('../model/author.js');

module.exports.all_author = (req, res)=>{

    AuthorModel.find((err, results)=>{
        if(err)
            console.log(err);
        else
            res.json(results);
    });
}

module.exports.get_author = (req, res)=>{

    const id = req.params.id;
    
        AuthorModel.findById(id, (err, results)=>{
            if(err)
                res.json({Message: 'The person with ID number '+id+' not found'});
            else
                res.json({Message: 'Results', results});
        });
}

module.exports.update_author = (req, res)=>{
    const id = req.params.id;

    AuthorModel.findByIdAndUpdate(id, req.body, (err, results)=>{
        if(err)
            res.status(400).json({Message:'Update not successfull'});
        else
            res.json({Message:'Update done', results});
    });
}

module.exports.delete_author = (req, res)=>{
    const id = req.params.id;

    AuthorModel.findByIdAndDelete(id, (err, results)=>{
        if(err)
            res.json({Message:'Author with id-'+id+' is not deleted'});
        else
            res.json({Message:'results deleted', results});
    });
}