import { TodoController } from './Controller/TodoController';

$(() => {
    new TodoController($('.container'));
    console.log('add container');
});