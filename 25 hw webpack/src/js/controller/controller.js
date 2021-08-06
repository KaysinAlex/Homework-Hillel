import { TodosView } from './view/todosView';
import { FormTodoView } from './view/todosFormView';
import { TodoCollection } from './module/module';

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
        this.collection.toggle(id);
        this.renderListTodo();
    }
    onSave(todo) {
        console.log('onsave work');
        this.collection.add(todo).then(() => this.renderListTodo());
    }
    onDelete(id) {
        console.log('onDelete work?');
        this.collection.onDelete(id);
        this.renderListTodo();
    }
    
    renderListTodo() {
        console.log('renderListTodo');
        this.todosView.render(this.collection.listTodos);
    }

}