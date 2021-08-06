export class TodosView{
    constructor(config) {
        console.log(config);
        this.config = config;
        this.$el = this.initView();
    }
    initView() {
        console.log('initView');


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