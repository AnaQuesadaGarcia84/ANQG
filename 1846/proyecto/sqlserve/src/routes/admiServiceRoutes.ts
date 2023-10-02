import { Router } from "express";
import { deleteAdminService, getAdminService, getAdminServices, postAdminService, updateAdminService } from "../controllers/AdminServiceController";

const routerAdminService = Router()
routerAdminService.get('/adminServices', getAdminServices);
routerAdminService.get('/adminServices/:id', getAdminService);
routerAdminService.delete('/adminServices/:id', deleteAdminService);
routerAdminService.post('/adminServices', postAdminService);
routerAdminService.put('/adminServices/:id', updateAdminService);

export default routerAdminService;
