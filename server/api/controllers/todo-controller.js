import Todo from '../../db/models/Todo'
import {
  BadRequest,
  Deleted,
  NotFound,
  InternalServerError
} from '../utils/errors'

export default class Controller {
  async get (ctx) {
    const todos = await new Todo()
      .fetchAll({ withRelated: ['users'] })
      .catch(err => new InternalServerError(err.toString()))

    ctx.send(todos.statusCode || 200, todos)
  }

  async getOne (ctx) {
    const todo = await new Todo({ id: ctx.params.id })
      .fetch({ withRelated: ['users'] })
      .catch(err => new BadRequest(err.toString()))

    const res = todo || new NotFound()

    ctx.send(res.statusCode || 200, res)
  }

  async create (ctx) {
    const { body } = ctx.request
    const todo = await new Todo({
      task: body.task,
      user_id: null
    }).save()
      .catch(err => new BadRequest(err.toString()))

    ctx.send(todo.statusCode || 200, todo)
  }

  async update (ctx) {
    const { body } = ctx.request

    const todo = await new Todo({ id: ctx.params.id })
      .save({
        task: body.task
      }, { method: 'update' })
      .catch(err => new BadRequest(err.toString()))

    const res = todo || new NotFound()

    ctx.send(res.statusCode || 200, res)
  }

  async delete (ctx) {
    const todo = await Todo.forge({ id: ctx.params.id })
      .destroy()
      .catch(err => new BadRequest(err.toString()))

    ctx.send(todo.statusCode || 200, todo.attributes ? new Deleted() : todo)
  }
}
