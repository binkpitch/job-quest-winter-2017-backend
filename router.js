const todoController = require('./controller/todo')

module.exports = (app) => {
  app.get('/', todoController.getTodo)
  app.post('/', todoController.addTodo)
  app.delete('/:id', todoController.deleteTodo)
  app.delete('/:id/toggle', todoController.toggleTodo)
}
