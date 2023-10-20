const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const conectarDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a la base de datos');
    }catch(error){
        console.log(error);
        //Detenemos la app
        process.exit(1);
    }
}

module.exports = conectarDB;

