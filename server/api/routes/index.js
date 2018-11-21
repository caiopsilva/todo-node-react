import Router from 'koa-router'
import users from './users-router'
import todo from './todo-router'
import me from './me-router'

const router = new Router()
const api = new Router()

api.use(users)
api.use(todo)
api.use(me)

router.use('/v1', api.routes())

export default router
