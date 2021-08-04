/* class TodoListView{
    constructor(config){
        console.log('TodoListView created');

        this.config = config;
        this.$el = this.initView()
    }

    initView(){
        return $(`<div id="taskList" class="task-list u-full-width"></div>`)
                    .on('click', '.task-item', (e) => this.onItemClick(e))
                    .on('click', '.delete-btn', (e) => this.onDeleteClick(e))
        
    }

    render(list){
        this.$el.html(list.map(this.getTodoTemplate).join('\n'))
    }

    getTodoTemplate(todoItem) {
        return `<div class="task-item u-full-width ${todoItem.isDone ? 'done' : ''}" data-todo-id="${todoItem.id}">
                    ${todoItem.title}
                    <span class="delete-btn">✘</span>
                </div>`
    }

    onItemClick(e){
        const id = $(e.target).data('todoId');
        this.config.onToggle(id)
    }

    onDeleteClick(e){
        e.stopPropagation()
        const id = $(e.target).closest('.task-item').data('todoId');
        this.config.onDelete(id)
    }
} */


// viev

const DELETE_BTN_SELECTOR = '.delete-btn';
const ITEM_SELECTOR = '.task-item';
const ADD_BTN_SELECTOR = '.addTodoBtn';
const TASK_DONE_CLASS = 'done';
const taskListTemplate = $('.task-list');

const taskItemTemplate = $("#taskItemTemplate").html();

class TodosView {
    constructor($el, config = {}) { 
        this._$task = $('#newTodoInput');
        this._container = $el; 
        this._$list = null;
        this._config = config;
        
        this.initView();
    }

    initView() {
        this._$list = $(taskListTemplate); // это лучше выносить отдельно
        this._$list.on('click', DELETE_BTN_SELECTOR, this.onListClick.bind(this));
        this._$list.on('click', ITEM_SELECTOR, this.onToggleTaskStateClick.bind(this));
        this._container.on('click', ADD_BTN_SELECTOR, this.onAddTodoClick.bind(this));
        this._container.append(this._$list);
    }

    onListClick(e) {
        const id = this.getElementId($(e.target));

        this._config.onDelete(id);
    }

    onToggleTaskStateClick(e) { 
        if (!$(e.target).is('.delete-btn')) {
            const id = this.getElementId($(e.target));

            this._config.onToggle(id);
        }
    }

    onAddTodoClick(e) {
        const task =  {
            title: this._$task.val(),
            isDone: false,
        };

        this._config.onSubmit(task);

        this.clearInput();
    }

    clearInput() {
        this._$task.val('');
    }

    renderList(list) { 
        this._$list.html(list.map(this.getListItemHtml).join('')); 
    
    }

    getListItemHtml({id, title, isDone}) {
        return  taskItemTemplate
            .replace('{{id}}', id)
            .replace('{{doneClass}}', isDone ? TASK_DONE_CLASS : '')
            .replace('{{title}}', title);
    }

    getElementId($el) {
        return $el.closest(ITEM_SELECTOR).data('todoId');
    }

    

}
