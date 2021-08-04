log = console.log;
 
class TodoController{
    constructor(){
        this.listview = new TodoListView({
            onToggle: this.onToggle.bind(this),
             //Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
            onDelete: (id) => this.onDelete(id)
        });
        
        this.formView = new TodoFormView({
            onSave: (todo) => this.onSave(todo)
        });

        $('.container')
            .prepend(this.listview.$el)
            .prepend(this.formView.$el);

        this.collection = new TodoCollection();

        this.collection.getList()
            .then(() => this.renderList())
    }

    onToggle(id) {   //Используем метод-переключатель classList.toggle и убедимся, что при нажатии на кнопку «Изменить тему» у элемента будет то убираться, то добавляться класс
        log('onToggle');
        this.collection.toggle(id);
        this.renderList();
    }

    onDelete(id) {
        log('onDelete');
        this.collection.delete(id);
        this.renderList();
    }

    onSave(todo) {
        log('onSave');
        this.collection.add(todo).then(() => this.renderList());
    }

    renderList() {
        log('render list');
        this.listview.render(this.collection.list);
    }
} 