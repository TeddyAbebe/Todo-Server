const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.controller')

router.get('/', todoController.getTodos);
router.get('/col/:id', todoController.getTodoByColId);
router.get('/:id', todoController.getById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.put('/complete/:id', todoController.completeTask);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;