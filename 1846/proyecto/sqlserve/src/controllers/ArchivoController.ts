import { Request, Response } from "express";
import Archivo from "../models/archivoModel";

export const getFile = async (req: Request, res: Response) => {
    const {id} = req.params;
    const archivo = await Archivo.findByPk(id);

    if(archivo){
        res.json(archivo)
    }
    else{
        res.status(404).json()
    }
}
