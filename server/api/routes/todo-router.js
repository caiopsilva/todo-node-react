import Router from 'koa-router'
import TodoController from '../controllers/todo-controller'
import TodoValidate from '../validators/todo-validator'

const router = new Router()
const ctrl = new TodoController()
const valid = new TodoValidate()

router.get('/todos', ctrl.get)
router.post('/todos', valid.create(), ctrl.create)

router.get('/todos/:id', ctrl.getOne)
router.put('/todos/:id', valid.update(), ctrl.update)
router.delete('/todos/:id', ctrl.delete)

export default router.routes()
