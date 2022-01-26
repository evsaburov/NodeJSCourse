import express, { Express } from 'express';
import { userRouter } from './users/users';
import { Server } from 'http';


export class App {
  app: Express;
  server: Server;
  port: number;

  constructor() {
    this.port = 8000;
    this.app = express();
  }

  useRoutes() {
    this.app.use('/users', userRouter);
  }

  public async init() {
    this.useRoutes();
    console.log(`Сервер запущен на http://localhost:${this.port}`);
    this.server = this.app.listen(this.port);
  }
}