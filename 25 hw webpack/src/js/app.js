import { TodoController } from './controller/controller.js';

$(() => {
    new TodoController($('.container'));
    console.log('add container');
});