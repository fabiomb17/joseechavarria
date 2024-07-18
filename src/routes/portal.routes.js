import { Router } from "express";
import { portalController } from "./../controllers/portal.controller"
//import { securityMiddelware } from "./../middelwares/security.middelware"

const router = Router();

//router.get('/general/:id', securityMiddelware.verifyToken, portalController.getPortal)

router.get('/', portalController.getIndex)
router.get('/seguridad', portalController.getSeguridad)
router.get('/notificaciones', portalController.getNotificaciones)
router.get('/perfil', portalController.getEditarPerfil)


export default router
