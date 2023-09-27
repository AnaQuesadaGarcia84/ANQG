import {Request, Response} from 'express';
import Curso from '../models/cursoModel'

export const getCursos = async (req: Request, res: Response) =>{
    const listCursos = await Curso.findAll();
    res.json(listCursos);
}//Método GETCURSOS

export const getCurso = async (req: Request, res: Response) =>{
    const {refcurso} = req.params;
    const curso = await Curso.findByPk(refcurso);

    if(curso){
        res.json(curso)
    }
    else{
        res.status(404).json()
        msg: `No existe un curso con el refcurso: &{refcurso}`
    }
}//Método GETCURSO 

export const deleteCurso = async (req: Request, res: Response) =>{
    const {refcurso} = req.params;
    const curso = await Curso.findByPk(refcurso);

    if(!curso){
        res.status(404).json()
        msg: `No existe un curso con el refcurso: &{refcurso}`
    }
    else{
        await curso.destroy();
        res.json({
            msg: 'El curso fue eliminado con éxito'
        }) 
    }
}//Método DELETE

//Crear nuevo registro
export const postCurso = async (req: Request, res: Response) =>{
    const {body} = req;
    try {
        await Curso.create(body);
        res.json({
            msg: 'El curso fue agregado con éxito!'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}

export const updateCurso = async (req: Request, res: Response) =>{
    const {body} = req;
    const {refcurso} = req.params;

    try {
        const curso = await Curso.findByPk(refcurso);
        if(curso){
            await curso.update(body);
            res.json({
                msg: 'El curso se actualizó con éxito'
            })
        }
        else{
            res.status(404).json()
            msg: `No existe un curso con el id: &{refcurso}`
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ha ocurrido un error'
        })
    }
}
