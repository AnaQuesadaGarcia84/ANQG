const mongoose = require('mongoose')

const evaluableSchema = new mongoose.Schema(
    {
      _id: String,
      user: String,
      idTarea: String,
      descripcionTarea: String,
      puntuacion: Number,
      estado: String

    }
)

module.exports= mongoose.model('tareas', evaluableSchema)