import mongoose from 'mongoose';
mongoose.set('debug', true);

import Todo from './todo';

mongoose.Promise = Promise;

mongoose
  .connect('mongodb://localhost/todo-api')
  .then(() => {
    console.log(`Connected to MongoDB at: localhost/todo-api`);
  })
  .catch((error) => {
    if (error.message && error.message.search('MongoError: connect ECONNREFUSED') !== -1) {
      console.log(`Check to make sure you've started the mongo service`, error.message);
    } else {
      console.log(error);
    }
  });

export default Todo;

