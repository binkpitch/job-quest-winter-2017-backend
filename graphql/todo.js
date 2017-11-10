const { getTodo } = require('../controller/todo')

exports.todoTypeDefs = `
type Todo {
  text: String!
  createAt: String!
  done: Boolean! 
}

type TodoQuery {
  todos: [Todo]
}

schema {
  query: TodoQuery
}
`

exports.todoResolvers = {
  TodoQuery: {
    todos () {
      return getTodo()
    }
  }
}
