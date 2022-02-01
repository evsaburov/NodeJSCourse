import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/loger.service';
import { UserController } from './users/users.controller';
import { Exeptionfilter } from './errors/exeption.filter';


export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  userController: UserController;
  exceptionFilter: Exeptionfilter;

  constructor(
    logger: LoggerService,
    userController: UserController,
    exceptionFilter: Exeptionfilter
  ) {

    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.exceptionFilter = exceptionFilter;
  }

  useRoutes() {
    this.app.use('/users', this.userController.router);
  }

  useExeptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
  }


  public async init() {
    this.useRoutes();
    this.useExeptionFilters();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
  }
}