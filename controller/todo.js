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

exports.toggleTodo = (req, res) => {
  const id = req.params.id
  Todo.findById(id, (err, user) => {
    if (err) {
      res.status(500).send(err)
    } else {
      Todo.findByIdAndUpdate(id, { done: !user.done }, {new: true}, (err, toggledUser) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(toggledUser)
        }
      })
    }
  })
}
