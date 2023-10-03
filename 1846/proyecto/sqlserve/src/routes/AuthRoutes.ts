import { Request, Response, Router } from "express";
import { accesoCtrl, registroCtrl} from "../controllers/AuthController";

const router = Router()
router.post('/registro', registroCtrl);
router.post('/acceso', accesoCtrl);

export {router}


