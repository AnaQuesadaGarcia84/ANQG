import { Router } from "express";
import { getFile } from "../controllers/ArchivoController";

const routerArchivos = Router()
routerArchivos.post('/archivos/:id', getFile)

export default routerArchivos