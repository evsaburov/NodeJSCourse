import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.post('/hello', (req, res) => {
  res.end()
})


app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`сервер запущен на localhost ${port}`);
})

