import { TodosView } from './view/todosView.js';
import { FormTodoView } from './view/todosFormView.js';
import { TodoCollection } from './module/module.js';

export class TodoController {
    constructor() {
        console.log('work export?');
        this.todosView = new TodosView({
            onToggle: this.onToggle.bind(this),
            onDelete: (id) => this.onDelete(id)
        });
        this.formView = new FormTodoView({
            onSave: (todo) => this.onSave(todo)
        });

        $('container')
            .prepend(this.todosView.$el)
            .prepend(this.formView.$el);
        
        this.collection = new TodoCollection();

        this.collection.getListTodo()
        .then(()=>this.renderListTodo())
    }
    onToggle(id) {
        console.log(this.onToggle);
        this.collection.onToggle(id);
        this.renderListTodo();
    }
    
    
    renderListTodo() {
        console.log('renderListTodo');
        this.todosView.render(this.collection.listTodos);
    }

}