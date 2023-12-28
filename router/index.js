import { Router } from "express";
import { authController, userController, newsController } from '../controller/index.js'
import { authMiddleware } from '../middleware/index.js'

const router = Router()

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.post('/refresh-token',authMiddleware.authentication, authController.refreshToken)
router.get('/profile', authMiddleware.authentication,  userController.profile)
router.get('/news', authMiddleware.authentication, newsController.getAllByUserId)
router.post('/news', authMiddleware.authentication, newsController.postAllByNewsId)
router.patch('')

export default router