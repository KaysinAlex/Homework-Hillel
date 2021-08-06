export class TodosView{
    constructor(config) {
        console.log(config);
        this.config = config;
        this.$el = this.initView();
    }
    initView() {
        console.log('initView');
        return $(`<div id="todoList" class = "todo-list addTodoInput"></div>`)
            .on('click', '.todo-item', (e) => this.onItemClick(e))
        .on('click', 'delete=btn', (e)=> this.onDeleteClick(e))    
    }
    
    render(list) {
        console.log(list);
    }
    getTodoElement(todoItem) {
        console.log(todoItem);
    }
    onItemClick(e) {
        console.log(e);
    }
    onDeleteClick(e) {
        console.log(e);
    }
}