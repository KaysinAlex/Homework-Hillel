import { TodoController } from './controller/controller';

$(() => {
    new TodoController($('.container'));
    console.log('add container');
});