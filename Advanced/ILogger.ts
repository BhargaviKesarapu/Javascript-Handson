import { injectable, inject, Container } from 'inversify';

import "reflect-metadata";

interface ILogger {

log(msg: string): void;

}

@injectable()
class consoleLogger implements ILogger {
log(msg: string): void {

console.log('Logging output in console:', msg);

}
}

@injectable()
class fileLogger implements ILogger {

log(msg: string): void {

 console.log('Logging output in console:', msg);

 }

}

@injectable()
class loggerContainerService {

private logger: ILogger;

constructor(@inject('ILogger') logger: ILogger) {

this.logger = logger;

 }

 public printMessage(message: string): void {

 this.logger.log(message);

 }

}

const container = new Container();

const logger = true;

if (logger) {

 container.bind<ILogger>('ILogger').to(fileLogger);

} else {

 container.bind<ILogger>('ILogger').to(consoleLogger);

}

const object = container.resolve<loggerContainerService>(loggerContainerService);

object.printMessage('output');
