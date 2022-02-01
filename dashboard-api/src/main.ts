import { App } from './app';
import { Exeptionfilter } from './errors/exeption.filter';
import { LoggerService } from './logger/loger.service';
import { UserController } from './users/users.controller';

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new Exeptionfilter(logger)
  );
  await app.init();
}

bootstrap();