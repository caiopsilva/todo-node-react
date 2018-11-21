import Router from 'koa-router'
import UserController from '../controllers/users-controller'

const router = new Router()
const ctrl = new UserController()

router.get('/me', ctrl.get)

export default router.routes()
