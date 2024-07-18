import { Router } from "express";
import { authController } from "../controllers/auth.controller"

const router = Router()

router.get('/auth', authController.getAuth)
router.get('/logout', authController.logout)

router.get('/login', authController.login)
router.post('/login', authController.getLogin)

router.get('/register', authController.register)

router.get('/forget-password', authController.resetPassword)

export default router
