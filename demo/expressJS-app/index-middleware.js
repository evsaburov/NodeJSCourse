import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.use((req, res, next) => {
  console.log('Время ', Date.now());
  next();
});

app.use('/hello', (req, res, next) => {
  console.log('Время ', Date.now());
  next();
});

app.post('/hello', (req, res) => {
  res.end()
});

app.use('/users', userRouter);

//обработчик ошибок
app.use((error, req, res, next) => {
  console.log(error.message());
  res.status(500).send(error.message);
});

app.listen(port, () => {
  console.log(`сервер запущен на localhost ${port}`);
});

