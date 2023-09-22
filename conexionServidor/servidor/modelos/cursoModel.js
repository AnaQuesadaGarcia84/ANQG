const mongoose = require('mongoose')

const cursoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },

    descripcion:{
        type: String,
        required: true
    },

    categoria:{
        type: String,
        required: true
    },

    duracion:{
        type: Number,
        required: true
    },

    temario:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Curso', cursoSchema)
