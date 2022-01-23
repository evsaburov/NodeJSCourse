import express from 'express';

const userRouter = expres.Router();

userRouter.use( (req, res, next) => {
  res.send('Обработчик users');
  next();
})

userRouter.post('/login', (req, res) => {
  res.send('login');
})

userRouter.post('/register', (req, res) => {
  res.send('register');
})

export { userRouter };



