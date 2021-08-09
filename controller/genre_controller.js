const GenreModel = require('../model/genre');

module.exports.all_genre = (req, res)=>{

    GenreModel.find((err, results)=>{
        if(err)
            console.log(err);
        else
            res.json(results);
    });
}

module.exports.get_genre = (req, res)=>{
    const id = req.params.id;

    GenreModel.findById(id, (err, results)=>{
        if(err)
            res.status(400).json({Message:'Genre with id-'+id+' not found'});
        else
            res.json({Message:'results',results});
    });
}

module.exports.update_genre = (req, res)=>{
    const id = req.params.id;

    GenreModel.findByIdAndUpdate(id, req.body, (err, results)=>{
        if(err)
            res.status(400).json({Message:'Genre with id-'+id+' could not be updated'});
        else
            res.json({Message:'results', results});
    });
}

module.exports.delete_genre = (req, res)=>{
    const id = req.params.id;

    GenreModel.findByIdAndDelete(id, (err, results)=>{
        if(err)
            res.json({Message:'Genre with id-'+id+' is not deleted'});
        else
            res.json({Message:'results deleted', results});
    });
}