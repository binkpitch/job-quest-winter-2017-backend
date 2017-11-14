const { getTodo, addTodo, toggleTodo, deleteTodo } = require('../controller/todo')

exports.todoTypeDefs = `
type Todo {
  _id: String!,
  title: String!
  content: String!
  closed: Boolean! 
}

type TodoId {
  _id: String!
}


type TodoQuery {
  todos: [Todo]
}


type TodoMutation {
  addTodo(text: String!): Todo!
  toggleTodo(_id: String!): Todo!
  deleteTodo(_id: String!): TodoId!
}


schema {
  query: TodoQuery
  mutation: TodoMutation
}
`

exports.todoResolvers = {
  TodoQuery: {
    todos () {
      return getTodo()
    }
  },
  TodoMutation: {
    addTodo (obj, { title, content }) {
      return addTodo(title, content)
    },
    toggleTodo (obj, { _id }) {
      return toggleTodo(_id)
    },
    deleteTodo (obj, { _id }) {
      return deleteTodo(_id)
    }
  }
}
