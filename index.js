import express from 'express';
import path from 'path';
const app = express(),
  port = 3000;

import bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); 
app.use(express.static(__dirname + '/public'));

import todoRoutes from './routes/todos';
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`TODOS_API IS RUNNING ON localhost:${port}`);
});