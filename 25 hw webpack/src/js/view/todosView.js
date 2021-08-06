import '../../css/style.css';

export default class TodosView{
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
        this.$el.html(list.map(this.getTodoElement).join('\n'));
    }
    getTodoElement(todoItem) {
        console.log(todoItem);
        
        return `<div class="todo-item addTodoInput ${todoItem.isDone ? 'done' : ''}" data-todo-id="${todoItem.id}">
                    ${todoItem.title}
                    <span class="delete-btn">✘</span>
                </div>`
    }
    onItemClick(e) {
        console.log(e);
        
        const id = $(e.target).data('todoId');
        this.config.onToggle(id);
    }
    onDeleteClick(e) {
        console.log(e);
        
        e.stopPtopagation();
        const id = $(e.target)
            .closest('todo=item')
            .data('todoId');
        
        this.config.onDelete(id);

    }
}