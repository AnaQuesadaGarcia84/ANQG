const mongoose = require('mongoose')

const evaluableSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  idTarea:{
    type: String,
    required: true
  },
  descripcionTarea:{
    type: String,
    required: true
  },
  puntuacion:{
    type: Number,
    required: true
  },
  estado:{
    type: String,
    required: true
  }
})

module.exports= mongoose.model('Tareas', evaluableSchema)