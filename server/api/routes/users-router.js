import Router from 'koa-router'
import UserController from '../controllers/users-controller'
import UserValidate from '../validators/users-validator'

const router = new Router()
const ctrl = new UserController()
const valid = new UserValidate()

router.get('/users', ctrl.get)

router.post('/users/signup', valid.create(), ctrl.create)
router.post('/users/login', ctrl.login)

router.get('/users/:id', ctrl.getOne)
router.put('/users/:id', valid.update(), ctrl.update)
router.delete('/users/:id', ctrl.delete)

export default router.routes()
