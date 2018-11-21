import User from '../../db/models/User'
import bcrypt from 'bcrypt'
import Joi from 'joi'
import Todo from '../../db/models/Todo'
import generateJWT from '../utils/jwt-generate'

const UserSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const TodoSchema = Joi.object().keys({
  task: Joi.string().required()
})

export default {
  async createTodo ({ input }, context) {
    if (!context.user) {
      const error = new Error('Not authenticated')
      error.code = 401
      throw error
    }

    const validate = Joi.validate(input, TodoSchema)
    if (validate.error) {
      const error = new Error('Invalid Input')
      error.status = 400
      error.data = validate.error
      throw error
    }

    const todo = await new Todo({
      task: input.task,
      user_id: context.user.id
    }).save()

    const todoWithRelated = await new Todo()
      .where('id', todo.attributes.id)
      .fetch({ withRelated: ['users'] })

    return todoWithRelated.toJSON()
  },

  async createUser ({ input }, req) {
    const validate = Joi.validate(input, UserSchema)
    if (validate.error) {
      const error = new Error('Invalid Input')
      error.status = 400
      error.data = validate.error
      throw error
    }

    const hashPassword = await bcrypt.hash(input.password, 10)

    const user = await new User({
      name: input.name,
      email: input.email,
      password: hashPassword
    }).save()

    return user.toJSON()
  },

  async login ({ input }) {
    const user = await new User({ email: input.email }).fetch()
    if (!user) {
      const error = new Error('User not found')
      error.status = 401
      throw error
    }
    const valid = await bcrypt.compare(input.password, user.attributes.password)
    if (!valid) {
      const error = new Error('Password is invalid')
      error.status = 401
      throw error
    }
    const { token } = generateJWT(user.toJSON())
    return {
      token,
      user: user.toJSON()
    }
  },

  async getTodos ({ input }, context, a) {
    if (!context.user) {
      const error = new Error('Not authenticated')
      error.code = 401
      throw error
    }

    const todos = await new Todo()
      .query(function (query) {
        if (input.text) {
          query.where('task', 'ilike', `%${input.text}%`)
        }
      })
      .fetchPage({
        limit: input.limit,
        offset: input.offset,
        withRelated: ['users']
      })

    return todos.toJSON()
  },

  async deleteTodo ({ id }, context) {
    if (!context.user) {
      const error = new Error('Not authenticated')
      error.code = 401
      throw error
    }

    const todo = await Todo.forge({ id })
      .destroy()

    return todo.toJSON()
  }
}
