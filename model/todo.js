const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  closed: {
    type: Boolean,
    required: true,
    default: false
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
