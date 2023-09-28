import {Request, Response} from 'express';
import Usuario from '../models/usuarioModel';

export const getUsuarios = async (req: Request, res: Response) =>{
    const listUsuario = await Usuario.findAll();
    res.json(listUsuario);
}//Método GETUsuarios

export const getUsuario = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    if(usuario){
        res.json(usuario)
    }
    else{
        res.status(404).json()
        msg: `No existe un usuario con el id: &{id}`
    }
}//Método GETUsuario 

export const deleteUsuario = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    if(!usuario){
        res.status(404).json({
        msg: `No existe un usuario con el id: &{id}`
        })
    }
    else{
        await usuario.destroy();
        res.json({
            msg: 'El usuario fue eliminado con éxito'
        }) 
    }
}//Método DELETE

//Crear nuevo registro
export const postUsuario = async (req: Request, res: Response) =>{
    const {body} = req;
    try {
        await Usuario.create(body);
        res.json({
            msg: 'El usuario fue agregado con éxito!'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}

export const updateUsuario = async (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params;

    try {
        const usuario = await Usuario.findByPk(id);
        if(usuario){
            await usuario.update(body);
            res.json({
                msg: 'El usuario se actualizó con éxito'
            })
        }
        else{
            res.status(404).json()
            msg: `No existe un usuario con el id: &{id}`
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}