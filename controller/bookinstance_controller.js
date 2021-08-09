const BookInstanceModel = require('../model/bookinstance.js');

module.exports.all_bookinstances = (req, res)=>{

    BookInstanceModel.find((err, results)=>{
        if(err)
            console.log(err);
        else
            res.json(results);
    });
}

module.exports.get_bookinstance = (req, res)=>{
    const id = req.params.id;

    BookInstanceModel.findById(id, (err, results)=>{
        if(err)
            res.status(400).json({Message:'Book instance with id-'+id+' not found'});
        else
            res.json({Message:'results',results});
    })
}

module.exports.update_bookinstance = (req, res)=>{
    const id = req.params.id;

    BookInstanceModel.findByIdAndUpdate(id, req.body, (err, results)=>{
        if(err)
            res.status(400).json({Message:'Book instance with id-'+id+' could not be updated'});
        else
            res.json({Message:'results', results});
    });
}

module.exports.delete_bookinstance = (req, res)=>{
    const id = req.params.id;

    BookInstanceModel.findByIdAndDelete(id, (err, results)=>{
        if(err)
            res.json({Message:'book instance with id-'+id+' is not deleted'});
        else
            res.json({Message:'results deleted', results});
    });
}