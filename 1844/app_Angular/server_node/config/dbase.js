const mongoose= require('mongoose')

// const DB_URI='mongodb://localhost:27017/Appweb'

// module.exports=()=>{
//     const connect= ()=>{
//         mongoose.connect(DB_URI,
//             {
//                 keepAlive:true,
//                 useNewUrlParse:true,
//                 useUnifieldTopology: true
//             }
//         ).then(()=>{
//             console.log('Conexión correcta')})
//         .catch((err)=>{'DB:ERROR !!'})
//     }

//     connect()
// }