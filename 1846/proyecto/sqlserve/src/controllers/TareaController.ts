import {Request, Response} from 'express';
import Tarea from '../models/tareasModel';

export const getTareas = async (req: Request, res: Response) =>{
    const listTarea = await Tarea.findAll();
    res.json(listTarea);
}//Método GETTareas

export const getTarea = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const tarea = await Tarea.findByPk(id);

    if(tarea){
        res.json(tarea)
    }
    else{
        res.status(404).json()
        msg: `No existe un tarea con el id: &{id}`
    }
}//Método GETTarea 

export const deleteTarea = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const tarea = await Tarea.findByPk(id);

    if(!tarea){
        res.status(404).json({
        msg: `No existe un tarea con el id: &{id}`
        })
    }
    else{
        await tarea.destroy();
        res.json({
            msg: 'El tarea fue eliminado con éxito'
        }) 
    }
}//Método DELETE

//Crear nuevo registro
export const postTarea = async (req: Request, res: Response) =>{
    const {body} = req;
    try {
        await Tarea.create(body);
        res.json({
            msg: 'El tarea fue agregado con éxito!'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}

export const updateTarea = async (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params;

    try {
        const tarea = await Tarea.findByPk(id);
        if(tarea){
            await tarea.update(body);
            res.json({
                msg: 'El tarea se actualizó con éxito'
            })
        }
        else{
            res.status(404).json()
            msg: `No existe un tarea con el id: &{id}`
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}