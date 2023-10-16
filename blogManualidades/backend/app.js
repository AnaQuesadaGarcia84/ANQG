const express = require('express');
const app = express();

app.use((req, res, next)=>{
    res.end('Esta es nuestra app express')
})


module.exports = app;

// min 12:48