const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:password@localhost:5432/db_todo'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'test.sqlite3')
    },
    useNullAsDefault: true
  }
}
