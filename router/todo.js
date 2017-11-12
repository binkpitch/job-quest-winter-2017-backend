const express = require('express')
const { getTodo, addTodo, deleteTodo, toggleTodo } = require('../controller/todo')
const router = express.Router()

router.get('/', (req, res, err) => {
  getTodo()
  .then(todos => res.status(200).send(todos))
  .catch(err => res.status(500).send(err))
})

router.post('/', (req, res, err) => {
  const text = req.body.text

  if (!text) {
    return res.status(412).send({ error: 'Missing text in request' })
  }

  addTodo(text)
  .then(createdTodo => res.status(201).send(createdTodo))
  .catch(err => res.status(500).send(err))
})

router.delete('/:id', (req, res, err) => {
  const _id = req.params.id
  deleteTodo(_id)
  .then(() => res.status(200).send({ _id }))
  .catch(err => res.status(500).send(err))
})
router.post('/:id/toggle', (req, res, err) => {
  const _id = req.params.id
  toggleTodo(_id)
  .then(toggleTodo => res.status(200).send(toggleTodo))
  .catch(err => res.send(500).send(err))
})

module.exports = router
