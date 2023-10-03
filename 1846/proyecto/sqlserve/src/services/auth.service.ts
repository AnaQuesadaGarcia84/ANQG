import { Auth } from '../interfaces/auth.interface';
import { UserModel } from '../models/usuarioModel'
import {UserInterface} from '../interfaces/usuario.interface'

import {encriptar, verificar} from '../utils/bcryptjs.handle'
import { generarToken } from '../utils/jwt.handle';

const registroNuevoUser = async () => {

}

const accesoUser =async () => {
  
}

export {registroNuevoUser, accesoUser}