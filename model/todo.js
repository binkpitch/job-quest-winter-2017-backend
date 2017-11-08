const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  text: String
})

const todoModel = mongoose.model('Todo', todoSchema)

module.exports = todoModel
