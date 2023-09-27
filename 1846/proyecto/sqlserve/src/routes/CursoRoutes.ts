import { Router } from 'express'
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoControler'

const router = Router()
router.get('/',getCursos);
router.get('/:id',getCurso);
router.get('/:id',deleteCurso);
router.get('/',postCurso);
router.get('/:id',updateCurso);

export default router;

