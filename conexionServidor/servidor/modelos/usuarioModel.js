const mongoose= ('mongoose')

const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },

    apellidos:{
        type: String,
        required: true
    },

    fechaNacimiento:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    telefono:{
        type: String,
        required: true
    },

    foto:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    tipo:{
        type: String,
        required: true
    },

    fechaCreacion:{
        type: Date,
        default: Date.now()
    },
    
})

module.exports = mongoose.model('Usuario'. usuarioSchema)

