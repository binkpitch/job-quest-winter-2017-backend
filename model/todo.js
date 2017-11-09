const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  text: {
    String,
    default: ''
  },
  done: {
    type: Boolean,
    default: false,
    createdAt: Date
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
