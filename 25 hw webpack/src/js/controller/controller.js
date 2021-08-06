export class TodoController {
    constructor() {
        this.todosView = new TodosView({
            onToggle: this.onToggle.bind(this),
            onDelete: (id) => this.onDelete(id)
        });
        this.formView = new FormTodoView({
            onSave: (todo)=>this.onSave(todo)
        })

console.log('work export?')






    }
}