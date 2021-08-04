/* class TodoCollection{
    constructor(){
        console.log('collection created');

        this.list = [];
    }

    getList(){
        return fetch(TODOS_URL)
            .then(res => res.json())
            .then((data) => this.list = data)
    }

    toggle(id){
        const todo = this.list.find(item => item.id == id);
        todo.isDone = !todo.isDone;

        return fetch(`${TODOS_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    delete(id){
        this.list = this.list.filter((item) => item.id != id);

        return fetch(`${TODOS_URL}/${id}`, {
            method: 'DELETE'
        });
    }

    add(newTask){
        newTask.isDone = false;

        return fetch(`${TODOS_URL}`, {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(task => this.list.push(task));
    }
} */


// model

class TodosCollection {
    constructor(url) {
        this._url = url; 
        this.list = []; 
        this.item = null;
    }
    fetchTodos() {
        return fetch(this._url)
            .then(resp => resp.json())
            .then((data) => this.setData(data))
        
    }

    setData(data) {
        this.list = data;
    }

    addTodo(data) {
        if (data.title === '') {
            return;
        }
         return fetch(`${this._url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
             },
         })
             .then(resp => resp.json())
             .then((data) => this.list.push(data))
    }

    toggleTodo(id) {
        this.item = this.list.find((item) => item.id == id);
        this.item.isDone = !this.item.isDone;

        return fetch(`${this._url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(this.item),
            headers: {
            'Content-Type': 'application/json',
             },
        }).then(resp => resp.json());
    }

    deleteTodo(id) {
        this.list = this.list.filter(item => item.id != id);
        console.log('DELETE TODO');
        return fetch(`${this._url}/${id}`, {
            method: 'DELETE',
        })
            .then(resp => resp.json());
    }
}
