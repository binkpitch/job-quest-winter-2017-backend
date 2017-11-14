const Todo = require('../model/todo')

exports.getTodo = (req, res) => {
  try {
    const todos = Todo.find()
    return todos
  } catch (err) {
    throw err
  }
}

exports.addTodo = (title, content) => {
  const newTodo = Todo({
    title,
    content
  })

  try {
    const createdTodo = newTodo.save()
    return createdTodo
  } catch (err) {
    throw err
  }
}

exports.deleteTodo = async (_id) => {
  try {
    await Todo.findByIdAndRemove(_id)
    return { _id }
  } catch (err) {
    throw err
  }
}

exports.toggleTodo = async (_id) => {
  try {
    const todoToToggle = await Todo.findById(_id)
    const toggledTodo = await Todo.findByIdAndUpdate(_id, { closed: !todoToToggle.closed }, { new: true })
    return toggledTodo
  } catch (err) {
    throw err
  }
}
