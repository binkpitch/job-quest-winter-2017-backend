const Todo = require('../model/todo')

exports.getTodos = async () => {
  try {
    const todos = await Todo.find()
    return todos
  } catch (err) {
    throw err
  }
}

exports.getTodo = async (_id) => {
  try {
    const todo = await Todo.findById({ _id })
    return todo
  } catch (err) {
    throw err
  }
}

exports.addTodo = async (title, content) => {
  const newTodo = Todo({
    title,
    content
  })

  try {
    const createdTodo = await newTodo.save()
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
