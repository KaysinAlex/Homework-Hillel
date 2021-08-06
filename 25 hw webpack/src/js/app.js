import { TodoController } from './controller/TodoController';

$(() => {
    new TodoController($('.container'));
    console.log('add container');
});