const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required:true
        },
        apellidos:{
            type:String,
            required:true
        },
        mail:{
            type:String,
            unique: true,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        telf:{
            type:Number,
            required:true
        },
        img:{
            type:String
        },
        tipo:{
            type:String,
            required:true
        },
        matriculado:{
            type:Boolean
        }

    }
)
module.exports= mongoose.model('user', UserSchema)

