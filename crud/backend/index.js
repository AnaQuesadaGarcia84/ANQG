const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors")

//Creamos el servidor
const app = express();

//Conectamos con la base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/blog', require('./routes/blogRoutes'));

app.listen(3700, () => {
    console.log('Servidor iniciado en el puerto 3700');
});





