import {Request, Response} from 'express';
import Mensaje from '../models/mensajeModels';

export const getMensajes = async (req: Request, res: Response) =>{
    const listMensaje = await Mensaje.findAll();
    res.json(listMensaje);
}//Método GETMensajes

export const getMensaje = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const mensaje = await Mensaje.findByPk(id);

    if(mensaje){
        res.json(mensaje)
    }
    else{
        res.status(404).json()
        msg: `No existe un mensaje con el id: &{id}`
    }
}//Método GETMensaje 

export const deleteMensaje = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const mensaje = await Mensaje.findByPk(id);

    if(!mensaje){
        res.status(404).json({
        msg: `No existe un mensaje con el id: &{id}`
        })
    }
    else{
        await mensaje.destroy();
        res.json({
            msg: 'El mensaje fue eliminado con éxito'
        }) 
    }
}//Método DELETE

//Crear nuevo registro
export const postMensaje = async (req: Request, res: Response) =>{
    const {body} = req;
    try {
        await Mensaje.create(body);
        res.json({
            msg: 'El mensaje fue agregado con éxito!'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}

export const updateMensaje = async (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params;

    try {
        const mensaje = await Mensaje.findByPk(id);
        if(mensaje){
            await mensaje.update(body);
            res.json({
                msg: 'El mensaje se actualizó con éxito'
            })
        }
        else{
            res.status(404).json()
            msg: `No existe un mensaje con el id: &{id}`
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}