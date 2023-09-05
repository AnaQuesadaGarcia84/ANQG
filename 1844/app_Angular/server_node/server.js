const express=require('express')

const initDB = require('./config/dbase')

const userRouters= require('./routes/user')

const app = express()

const port = 3001

// app.get('/',(req, res)=>{
//     res.send({
//         data:'Bienvenido Mister Marshall'
//     })
// })

app.use(userRouters)
app.link(port, ()=>{
    console.log('En línea!!!')
})

initDB()
