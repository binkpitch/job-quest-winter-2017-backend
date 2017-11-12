const Todo = require('../model/todo')

exports.getTodo = (req, res) => {
  try {
    const todos = Todo.find()
    return todos
  } catch (err) {
    throw err
  }
}

exports.addTodo = (text) => {
  const newTodo = Todo({
    text,
    createAt: new Date()
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
    const toggledTodo = await Todo.findByIdAndUpdate(_id, { done: !todoToToggle.done }, { new: true })
    return toggledTodo
  } catch (err) {
    throw err
  }
}
