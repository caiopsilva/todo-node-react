import bookshelf from '../bookshelf'
import User from './User'

export default bookshelf.Model.extend({
  tableName: 'todos',
  hasTimestamps: true,
  uuid: true,
  idAttribute: 'id',
  users: function () {
    return this.belongsTo(User)
  }
})
