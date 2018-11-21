import bookshelf from '../bookshelf'
import Todo from './Todo'

export default bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  uuid: true,
  idAttribute: 'id',
  toJSON: function () {
    const attrs = bookshelf.Model.prototype.toJSON.apply(this, arguments)
    delete attrs.password
    return attrs
  },
  todos: function () {
    return this.hasMany(Todo)
  }
})
