//all routes for Todo app
const express = require('express')
const router = express.Router();
const {getAllTodos, createTodo, getTodo, updateTodo, deleteTodo} = require('../controllers/TodoController')
const Todo = require('../models/Todo')
// get all todos
router.get('/', getAllTodos);
// create a new Todo
router.post('/', createTodo);
//get a single Todo
router.get('/:id', getTodo);
//update a Todo
router.patch('/:id', updateTodo);
//delete a Todo
router.delete('/:id', deleteTodo);
module.exports = router;
