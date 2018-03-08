import express from 'express';
const router = express.Router();
import db from '../models';
import { getTodos, createTodo, getTodo, updateTodo, deleteTodo } from '../helpers/todos';

router.route('/')
  .get(getTodos)
  .post(createTodo);

router.route('/:todoId')
  .get(getTodo)
  .put(updateTodo)
  .delete(deleteTodo);

export default router;