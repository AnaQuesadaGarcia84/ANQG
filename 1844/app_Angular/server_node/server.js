const express=require('express')

//const userRouters= require('./app/routes/user')

const app = express()

const port = 3700

app.listen(port,()=>{
    console.log('La aplicación está en línea...')
})

//app.use(userRouters)

//Conexión con la base de datos
const mongoose=require('mongoose')

mongoose.Promise= global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/AppWeb', {
    useNewUrlParser:true,
})
.then(()=>{
    console.log('Conexión establecida...')
})
.catch(err => console.log(err))






//initDB()
