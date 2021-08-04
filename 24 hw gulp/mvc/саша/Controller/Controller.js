/* class TodoController {
  constructor() {
    this.listview = new TodoListView({
      onToggle: this.onToggle.bind(this),
      onDelete: (id) => this.onDelete(id),
    });

    this.formView = new TodoFormView({
      onSave: (task) => this.onSave(task),
    });

    $('.container').append(this.listview.$el).append(this.formView.$el);

    this.collection = new TodoCollection();

    this.collection.getList().then(() => this.renderList());
  }

  onToggle(id) {
    console.log('this', this);
    this.collection.toggle(id);
    this.renderList();
  }

  onDelete(id) {
    this.collection.delete(id);
    this.renderList();
  }

  onSave(task) {
    this.collection.add(task).then(() => this.renderList());
  }

  renderList() {
    this.listview.render(this.collection.list);
  }
} */




// controller

class TodosController {      
    constructor($el) {        
        this.initCollection(); 
        this.initView($el);   
       
    }

    initCollection() {
        this.todosCollection = new TodosCollection(TODOS_URL); 
        this.todosCollection
            .fetchTodos()
            .then(() => this.renderList());
    }

    initView($el) {
        this.todosView = new TodosView($el, {          
            onDelete: this.deleteTodo.bind(this),       
            onToggle: this.toggleTodo.bind(this),                 
            onSubmit: this.submitForm.bind(this),                  
        });
    }

    renderList() {
        this.todosView.renderList(this.todosCollection.list);
    }

    submitForm(data) {
        this.todosCollection.addTodo(data)
            .then(() => this.renderList());
    }
    
    toggleTodo(id) {
        this.todosCollection.toggleTodo(id);

        this.renderList();
    }

    deleteTodo(id) {  
        this.todosCollection.deleteTodo(id);

        this.renderList();
    }
}
