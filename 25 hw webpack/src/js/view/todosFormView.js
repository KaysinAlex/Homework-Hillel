export default class FormTodoView{
    constructor(config) {
        this.config = config;
        this.$el = this.initView();
        this.$todoInput = this.$el.find('#todoAddInput');
    }

    initView() {
        console.log('initView');
        return $(`<form id="addTodoForm">
                    <div class = "row">
                        <div class = "input column">
                            <input
                            type = "text"
                            id = "todoAddInput"
                            class = "addTodoInput"
                            />
                            </div>
                            <div class = "btn column">
                            <input type = "submit"
                            class ="addTodoInput"
                            value = "Add new todo"
                            />
                       </div>
                    </div>
                 </form>`).on('submit', (e)=> this.onFormRefer(e))
    }
    onFormRefer(e) {
        console.log('onFormRefer');
        e.preventDefault();

        const todo = {
            title: this.$todoInput.val(),
        }
        this.config.onSave(todo);
        this.clear();
    }
    clear() {
        console.log('clear input');
        this.$todoInput.val('');
    }
}


