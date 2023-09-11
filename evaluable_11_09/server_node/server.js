const express=require('express')

const cursoRouters= require('./routes/evaluable')

const app = express()

const port = 3700

app.listen(port,()=>{
    console.log('La aplicación está en línea...')
})


//Conexión con la base de datos
const mongoose=require('mongoose')

mongoose.Promise= global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/Evaluable11_9', {
    useNewUrlParser:true,
})
.then(()=>{
    console.log('Conexión establecida...')
})
.catch(err => console.log(err))

