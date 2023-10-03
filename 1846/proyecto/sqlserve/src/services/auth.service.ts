import { AuthInterface } from '../interfaces/auth.interface';
import { UserModel } from '../models/usuarioModel'
import {UserInterface} from '../interfaces/usuario.interface'

import {encriptar, verificar} from '../utils/bcryptjs.handle'
import { generarToken } from '../utils/jwt.handle';

const registroNuevoUser = async ({email, password, nombre}:UserInterface) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return 'El usuario ya existe'

    const passHash = await encriptar(password);
    const registroNuevoUser = await UserModel.create({email, password:passHash, nombre});
    
    return registroNuevoUser
}

const accesoUser =async ({email, password}:AuthInterface) => {
  const checkIs = await UserModel.findOne({email});
  if(!checkIs) return 'El usuario no existe'

    const passwordHash = checkIs.password
    
    const esCorrecto = await verificar(password, passwordHash);
    if(!esCorrecto) return 'La contraseña es incorrecta'

    const token = generarToken(checkIs.email);
    const data= {
        token,
        user: checkIs
    }
    return data
}

export {registroNuevoUser, accesoUser}