import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController';
import validateToken from '../services/validate-token';

const router = Router();

//El validateToken es para que este apartado solo lo vea el usuario cuando ya ha iniciado sesión
//Y bebe desde server.ts que llama a la ruta de, en este caso, api Cursos
router.get('/', validateToken, getCursos);
router.get('/:id', validateToken, getCurso);
router.delete('/:id', validateToken, deleteCurso);
router.post('/', validateToken, postCurso);
router.put('/:id', validateToken, updateCurso);

export default router;