import { TODOS_URL } from '../config.js'; // если я пишу не TODOS_URL а другое имя то пишет: свойство обьявлено но не прочитано! узнать почему?

export class TodoCollection {
    constructor() {
        console.log('collection created');

        this.list = [];
    }
    getList() {
        console.log('get list fetch');

        return fetch(TODOS_URL)
            .then(res => res.json())
            .then((data) => this.list = data)
    }
    toggle(id) {
        const todoElement = this.list.find(item => item.id == id);
        todoElement.isDone = !todoElement.isDone;
        console.log('element isDone', this.todoElement);
        
        return fetch(`${TODOS_URL}/${id}`, {
            metod: 'PUT',
            body: JSON.stringify(todoElement),
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    delete(id){
        console.log(id);
    }

    add(newTodo) {
        newTodo.isDone = false;
        console.log(newTodo);
        
    }
}