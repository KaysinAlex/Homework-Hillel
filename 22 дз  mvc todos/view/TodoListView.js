const DELETE_TODO_BTN_SELECTOR = '.delete-todo-btn';
const ADD_TODO_BTN_SELECTOR = '.addTodoBtn';
const ITEM_SELECTOR = '.task-item';
const TASK_DONE_CLASS = 'done';

const taskListElement = $('.task-list');
const taskItemTemplate = $('#taskItemTemplate').html();

class TodosView {
    constructor($el, config = []) {
        this._$task = $('#newTodoInput');
        this._container = $el;
        this._config = config;
        this._$list = null;

        this.initView();
    }
    initView() {
        console.log('initView');
        this._$list = $(taskListElement);
        this._$list.on('click', DELETE_TODO_BTN_SELECTOR, this.onListClick.bind(this));
        this._container.on('click', ADD_TODO_BTN_SELECTOR, this.onAddTodoClick.bind(this));
        this._$list.on('click', ITEM_SELECTOR, this.onToggleTaskStateClick.bind(this));
        this._container.append(this._$list);


    }
    onListClick(e) {
        const id = this.getElementId($(e.target));
        this._config.onDelete(id);
        console.log(e.target);
    }

    onToggleTaskStateClick(e) {
        if (!$(e.target).is('delete-todo-btn')) {
            const id = this.getElementId($(e.target));
            this._config.onToggle(id);
        }
        
    }

    onAddTodoClick(e) {
        const task = {
            title: this._$task.val(),
            isDone: false,
        
        };
        this._config.onSubmit(task);
        this.clearInput();
        console.log(' BTN click');
    }
    clearInput() {
        this._$task.val('');
        console.log('clear input');
    }


    renderList(list) {
        console.log('renderViewList', list);
        this._$list.html(list.map(this.getListItemHtml).join(''));
        
    }
    getListItemHtml({ id, title, isDone }) {
        console.log('getListItemHtml');
        return taskItemTemplate
            .replace('{{id}}', id)
            .replace('{{doneClass}}', isDone ? TASK_DONE_CLASS : '').replace('{{title}}', title);
    }

    getElementId($el) {
        console.log('getElemId');
        return $el.closest(ITEM_SELECTOR).data('todoId');
    }
}

