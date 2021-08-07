export default class TodoFormView{
    constructor(config){
        this.config = config;
        this.$el = this.initView()
        this.$todoInput = this.$el.find('#todoAddInput');
    }

    initView() {
        console.log('initView');
        return $(`<form id="addTodoForm">
                    <div class="row">
                        <div class="input column">
                            <input
                                type="text"
                                id="todoAddInput"
                                class="addTodoInput"
                            />
                        </div>
                        <div class="btn column">
                            <input type="submit" class="addTodoInput" value="Add new todo" />
                        </div>
                    </div>
                </form>`).on('submit', (e) => this.onFormRefer(e))
    }

    onFormRefer(e) {
        log('onFormRefer');
        e.preventDefault(); //при вызове этого метода действие по умолчанию для события не запускается.

        const todo = {
            title: this.$todoInput.val(), //метод .val() получает текущее значение атрибута из первого элемента в наборе совпавших элементов, или устанавливает значение атрибута для каждого соответствующего элемента
        }

        this.config.onSave(todo);

        this.clear();
    }

    clear() {
        log('clear input');
        this.$todoInput.val('') // val('') установка значений input  в пустую строку после ввода todo 
    }
}