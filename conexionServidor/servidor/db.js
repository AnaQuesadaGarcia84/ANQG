// Este archivo es para conectar con la base de datos

const mongoose = require('mongoose')
require('dotenv').config({path: 'variable.env'})

const conectarDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_MONGO, {
            // useNewUrlParser: true, 
            // useUnitfiedTopology: true
        })
        console.log('La base de datos está conectada')
    }catch(error){
        console.log(error)
        process.exit(1)//Cerramos el proceso al haber un error
    }
}

module.exports = conectarDB
