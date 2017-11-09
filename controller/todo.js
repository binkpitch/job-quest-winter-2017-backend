const Todo = require('../model/todo')

exports.getTodo = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(todos)
    }
  })
}

exports.addTodo = (req, res) => {
  const newTodo = Todo({
    text: req.body.text
  })

  newTodo.save((err, createdTodo) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(createdTodo)
    }
  })
}

exports.deleteTodo = (req, res) => {
  const id = req.params.id
  Todo.findByIdAndRemove(id, err => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(204).send()
    }
  })
}

exports.toggleTodo = async(req, res) => {
  const id = req.params.id
  const todoToToggle = await Todo.findById(id)
  Todo.findByIdAndUpdate(id, { done: !todoToToggle.done }, { new: true })
  .then(toggledTodo => {
    res.status(200).send(toggledTodo)
  }).catch(err => res.status(500).send(err))
}
