class TodosCollection {
    constructor(url) {
        this._url = url;
        this.list = [];
        this.item = null;
    }
    fetchTodos() {
        console.log('FETCH');
        return fetch(this._url)
            .then(resp => resp.json())
            .then((data) => this.setData(data))     
        
    }
    setData(data) {
        this.list = data;
    }
    addNewTodo(data) {
        if (data.title === '') {
            return;
        }
        return fetch(`${this._url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json',
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