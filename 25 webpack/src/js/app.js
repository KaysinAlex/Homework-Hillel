import TodoController from './Controller/TodosController';

$(() => {
      new TodoController($('.container'));
      console.log('add container');
});