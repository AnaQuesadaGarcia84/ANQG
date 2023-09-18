const Tarea = require('../models/avaluable');

exports.crearTarea = async (req, res) => {
    try {
        let tarea;
        //creamos tarea
        tarea = new Tarea(req.body);
        await tarea.save();
        res.send(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTarea = async (req, res) =>{
    try {
        const tareas = await Tarea.find();
        res.json(tareas)
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarTarea = async (req, res)  => {
    try {
        const { nombre, descripcion, categoria, duracion, temas} = req.body;
        let tarea = await Tarea.findById(req.params.id);
        if(!tarea) {
            res.status(404).json({ msg: 'No existe la tarea' })
        }
        tarea.nombre = nombre;
        tarea.descripcion = descripcion;
        tarea.categoria = categoria;
        tarea.duracion = duracion;
        tarea.temas = temas;
        tarea = await Curso.findOneAndUpdate({ _id: req.params.id },curso, { new: true} )
        res.json(tarea);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);
        if(!tarea) {
            res.status(404).json({ msg: 'No existe la tarea' })
        }     
        res.json(tarea);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);
        if(!tarea) {
            res.status(404).json({ msg: 'No existe la tarea' })
        }    
        await Curso.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Tarea eliminada con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}