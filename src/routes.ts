import {Router} from 'express'
import SurveysController from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const router = Router()

const surveysController = new SurveysController()

const userController = new UserController()
router.post("/users", userController.create)
router.post("/surveys", surveysController.create)
router.get("/surveys", surveysController.show)


export default router