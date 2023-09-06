const model= require('../models/user');
const fs=require('fs');
const { Model } = require('mongoose');
const path=require('path')

const controller ={
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy el home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador user'
        });
    },
    saveUser: function(req, res){
        const user= new Model();
        const params = req.body;
        user.name= params.name;
        user.description = params.description;
        user.category = params.category;
        user.year= params.year;
        user.langs = params.langs;










        
    }
}
