import { Router } from 'express'
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/UsuarioController'

const routerUsuario = Router()
routerUsuario.get('/usuarios/',getUsuarios);
routerUsuario.get('/usuarios/:id',getUsuario);
routerUsuario.delete('/usuarios/:id',deleteUsuario);
routerUsuario.post('/usuarios/',postUsuario);
routerUsuario.put('/usuarios/:id',updateUsuario);

export default routerUsuario;