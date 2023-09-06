const model= require('../models/user');
const fs=require('fs');
const { Model } = require('mongoose');
const path=require('path');
const { use } = require('../routes/user');

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
        user.save((err, userStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento'})
            if(!projectStored) return res.status(404).send({message: 'No se ha podido hacer la conexión'})

            return res.status(200).send({user:userStored});
        })   
    },

    getUser: function(req, res){
        var userId= req.params.id;

        if(userId == null) return res.status(404).send({message: 'El usuario no existe'})

        UserActivation.findById(userId, (err,user)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'})
            if(err) return res.status(400).send({message:'El usuario no existe'});
            return res.status(200).send({
                user
            });
        });
    },

    getUsers: function(req, res){
        User.find({}).sort('-year').exec((err,users)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!projects) return res.status(404).send({message: 'No hay usuarios que mostrar'});
            return res.status(200).send({projects});
        });
    },

    updateUser : function(req, res){
        var userdId = req.params.id;
        var ipdate = req.body;
        User.findByIdAndUpdate(userdId, update, {new:true}, (err, userUpdated)=>{
            if(err) return res.status(500).send({message: 'Error al actualizar'})
            if(!userUpdated) returnres.status(404).send({message: 'No existe el usuario a actualizar'})
            return res.status(200).send({
                user:userUpdated
            })
        })
    },

    deleteUser: function(req, res){
        var userId = req.params.id;

        User.findByIdAndRemove(userId, (err, userRemoved)=>{
            if(err) return res.status(500).send({message: 'No se ha podido borrar el usuario'});
            if(!userRemoved) return res.status(404).send({message:'No se puede eliminar el usuario'});

            return res.status(200).send({
                user:userRemoved
            });
        });
    }

};

module.exports= controller;
