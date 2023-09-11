const mongoose = require('mongoose')

const cursosSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true
        },
        descripcion:{
            type:String,
            required:true
        },
        horas:{
            type:Number,
            required:true
        },
        temario:{
            type:String,
            required:true
        },
        img:{
            type:String
        }
    }
)

module.exports= mongoose.model('cursos', cursosSchema)