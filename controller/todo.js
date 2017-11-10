const Todo = require('../model/todo')

exports.getTodo = (req, res) =>
  Todo.find({}, (err, todos) => {
    if (err) throw err
    return todos
  })

exports.addTodo = (text) => {
  const newTodo = Todo({
    text,
    createAt: new Date(),
    done: false
  })

  return newTodo.save((err, createdTodo) => {
    if (err) throw err
    return createdTodo
  })
}

exports.deleteTodo = (id) =>
  Todo.findByIdAndRemove(id, err => {
    if (err) throw err
  })

exports.toggleTodo = async(id) => {
  const todoToToggle = await Todo.findById(id)
  return Todo.findByIdAndUpdate(id, { done: !todoToToggle.done }, { new: true })
  .then(toggledTodo => toggledTodo)
}
