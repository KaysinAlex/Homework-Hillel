
export default class TodoListView{
    constructor(config){
        console.log('Todo List View created');

        this.config = config;
        this.$el = this.initView();
    }

    initView(){
        return $(`<div id="todoList" class="todo-list addTodoInput"></div>`)
                    .on('click', '.todo-item', (e) => this.onItemClick(e))
                    .on('click', '.delete-btn', (e) => this.onDeleteClick(e))
        
    }

    render(list){
        this.$el.html(list.map(this.getTodoElement).join('\n')); //Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
    }

    getTodoElement(todoItem) {
        console.log('getTodoElement');
        return `<div class="todo-item addTodoInput ${todoItem.isDone ? 'done' : ''}" data-todo-id="${todoItem.id}">
                    ${todoItem.title}
                    <span class="delete-btn">✘</span>
                </div>`
    }

    onItemClick(e) {
        console.log('onItemClick', e);
        const id = $(e.target).data('todoId');
        this.config.onToggle(id);
    }

    onDeleteClick(e) {
        console.log('onDeleteClick', e);
        e.stopPropagation(); // stopPropagation(), который останавливает всплытие (bubbling) события “клик” к родительским элементам.
        const id = $(e.target).closest('.todo-item').data('todoId'); //Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.
        this.config.onDelete(id);
    }
}