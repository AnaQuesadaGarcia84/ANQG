import { Response, Request } from "express";
import {registroNuevoUser, accesoUser} from "../services/auth.service"


const registroCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registroNuevoUser(body)
    res.send(responseUser)
}//REGISTROCTRL


const accesoCtrl = async ({body}: Request, res:Response) => {
    const {email, password} = body
    const responseUser = await accesoUser({email, password})

    if(responseUser === "La contraseña es incorrecta"){
        res.status(403)
        res.send(responseUser)
    }
    else{
        res.send(responseUser)
    }
}//ACCESOCTRL


export { registroCtrl, accesoCtrl }