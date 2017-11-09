const express = require('express')
const todoController = require('../controller/todo')
const router = express.Router()

router.get('/', todoController.getTodo)
router.post('/', todoController.addTodo)
router.delete('/:id', todoController.deleteTodo)
router.post('/:id/toggle', todoController.toggleTodo)

module.exports = router
