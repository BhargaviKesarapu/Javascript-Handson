import { injectable, inject, Container } from 'inversify';
import "reflect-metadata";

interface ILogger {
log(msg: string): void;

}

//to automatically resolve all the dependencies
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


const container = new Container();
container.bind<ILogger>('fileLogger').to(fileLogger);
container.bind<ILogger>('consoleLogger').to(consoleLogger);

const object1 = container.get<ILogger>('fileLogger');
const object2 = container.get<ILogger>('consoleLogger');

object1.log("filelogger");
object2.log("consolelog");

