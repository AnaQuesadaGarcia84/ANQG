//res.send({data: 'Esto viene de el controlador usuario'})
const model= require('../models/user');

exports.getData = (req, res) =>{
    model.find({}, (err,docs)=>{
        res.send({
            doc:docs
        })
    })
}

