import { buildSchema } from 'graphql'

export default buildSchema(`
  """ Todo Type """
  type Todo {
    id: ID!
    task: String!
    createdAt: String!
    updatedAt: String!
    users: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    todos: [Todo!]!
  }

  type AuthData {
    user: User!
    token: String!
  }

  input UserInput {
    email: String!
    name: String!
    password: String!
  }

  input TodoInput {
    task: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input Search {
    limit: Int
    offset: Int
    text: String
  }

  type RootQuery {
    login(input: LoginInput!): AuthData!
    getTodos(input: Search): [Todo!]!
  }

  type RootMutation {
    """ Cadastro de Usuario """
    createUser(input: UserInput): User!
    createTodo(input: TodoInput): Todo!
    deteleTodo(id: ID!): Todo!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)
