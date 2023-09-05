//res.send({data: 'Esto viene de el controlador cursos'})
const model=require('../models/cursos');

exports.getData = (req, res) =>{
    model.find({}, (err,docs)=>{
        res.send({
            doc:docs
        })
    })
}


