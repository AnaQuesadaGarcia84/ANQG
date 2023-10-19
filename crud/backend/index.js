const express = require('express');

//Creamos el servidor
const app = express();

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})

