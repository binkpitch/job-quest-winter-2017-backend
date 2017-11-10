const { getTodo } = require('../controller/todo')

exports.todoTypeDefs = `
type Todo {
  text: String!
  createAt: String!
  done: Boolean! 
}

type Query {
  todos: [Todo]
}

schema {
  query: Query
}
`

exports.todoResolvers = {
  Query: {
    todos () {
      return getTodo()
    }
  }
}
