const model=require('../models/cursos');
const fs=require('fs');
const { Model } = require('mongoose');
const path=require('path');
const { use } = require('../routes/cursos');

const controller ={
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy el home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador cursos'
        });
    },
    saveCursos: function(req, res){
        const cursos= new Model();
        const params = req.body;
        
        cursos.name= params.name;
        cursos.description = params.description;
        cursos.category = params.category;
        cursos.year= params.year;
        cursos.langs = params.langs;
        cursos.save((err, cursosStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar el documento'})
            if(!projectStored) return res.status(404).send({message: 'No se ha podido hacer la conexión'})

            return res.status(200).send({cursos:cursosStored});
        })   
    },

    getCurso: function(req, res){
        var cursosId= req.params.id;

        if(cursosId == null) return res.status(404).send({message: 'El usuario no existe'})

        cursosActivation.findById(cursosId, (err,cursos)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'})
            if(err) return res.status(400).send({message:'El usuario no existe'});
            return res.status(200).send({
                cursos
            });
        });
    },

    getCursos: function(req, res){
        cursos.find({}).sort('-year').exec((err,cursoss)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!projects) return res.status(404).send({message: 'No hay usuarios que mostrar'});
            return res.status(200).send({projects});
        });
    },

    updateCursos : function(req, res){
        var cursosdId = req.params.id;
        var update = req.body;
        cursos.findByIdAndUpdate(cursosdId, update, {new:true}, (err, cursosUpdated)=>{
            if(err) return res.status(500).send({message: 'Error al actualizar'})
            if(!cursosUpdated) return res.status(404).send({message: 'No existe el usuario a actualizar'})
            return res.status(200).send({
                cursos:cursosUpdated
            })
        })
    },

    deleteCursos: function(req, res){
        var cursosId = req.params.id;

        cursos.findByIdAndRemove(cursosId, (err, cursosRemoved)=>{
            if(err) return res.status(500).send({message: 'No se ha podido borrar el usuario'});
            if(!cursosRemoved) return res.status(404).send({message:'No se puede eliminar el usuario'});

            return res.status(200).send({
                cursos:cursosRemoved
            });
        });
    }

};

module.exports= controller;



