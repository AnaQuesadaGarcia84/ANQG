import { Request, Response } from "express";
import AdminService from "../models/adminServiceModel";

export const getAdminServices = async (req: Request, res: Response) =>{
    const listAdminServices = await AdminService.findAll();
    res.json(listAdminServices);
}//Método GETCURSOS

export const getAdminService = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const adminService = await AdminService.findByPk(id);

    if(adminService){
        res.json(adminService)
    }
    else{
        res.status(404).json()
        msg: `No existe un adminService con el id: &{id}`
    }
}//Método GETCURSO 

export const deleteAdminService = async (req: Request, res: Response) =>{
    const {id} = req.params;
    const adminService = await AdminService.findByPk(id);

    if(!adminService){
        res.status(404).json({
        msg: `No existe un adminService con el id: &{id}`
        })
    }
    else{
        await adminService.destroy();
        res.json({
            msg: 'El adminService fue eliminado con éxito'
        }) 
    }
}//Método DELETE

//Crear nuevo registro
export const postAdminService = async (req: Request, res: Response) =>{
    const {body} = req;
    try {
        await AdminService.create(body);
        res.json({
            msg: 'El adminService fue agregado con éxito!'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}

export const updateAdminService = async (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params;

    try {
        const adminService = await AdminService.findByPk(id);
        if(adminService){
            await adminService.update(body);
            res.json({
                msg: 'El adminService se actualizó con éxito'
            })
        }
        else{
            res.status(404).json()
            msg: `No existe un adminService con el id: &{id}`
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}


