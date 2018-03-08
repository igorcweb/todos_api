import db from '../models';

export const getTodos = (req, res) => {
  db.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.send(err);
    })
}

export const createTodo = (req, res) => {
  db.create(req.body)
    .then((newTodo) => {
      res.status(201).json(newTodo);
    })
    .catch((err) => {
      res.send(err);
    })
}

export const getTodo = (req, res) => {
  db.findById(req.params.todoId)
    .then((foundTodo) => {
      res.json(foundTodo)
    })
    .catch((err) => {
      res.send(err);
    })
}

export const updateTodo = (req, res) => {
  db.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then((updatedTodo) => {
      res.json(updatedTodo);
    })
    .catch((err) => {
      res.send(err);
    })
}

export const deleteTodo = (req, res) => {
  db.remove({ _id: req.params.todoId })
    .then(() => {
      res.json({ message: 'Todo Deleted' });
    })
    .catch((err) => {
      res.send(err);
    })
}