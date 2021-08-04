log = console.log;

class TodoCollection{
    constructor(){
        log('massive collection todos list created ');

        this.list = [];
    }

    getList() {
        log('get list fetch');
        return fetch(TODOS_URL)
            .then(res => res.json())
            .then((data) => this.list = data)
    }

    toggle(id){
        const todoElem = this.list.find(item => item.id == id);
        //Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.
        todoElem.isDone = !todoElem.isDone;
        log('find element isDone');

        return fetch(`${TODOS_URL}/${id}`, {
            method: 'PUT',
            // PUT создаёт новый ресурс или заменяет представление целевого ресурса, данными представленными в теле запроса.
            body: JSON.stringify(todoElem),
            // преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    delete(id){
        this.list = this.list.filter((item) => item.id != id);
        //Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
        log('delete  selected elem todo');
        return fetch(`${TODOS_URL}/${id}`, {
            method: 'DELETE'  // DELETE удаляет указанный ресурс.
        });
    }

    add(newTodo){
        newTodo.isDone = false;
     log('add new todo')
        return fetch(`${TODOS_URL}`, {
            method: 'POST', // метод POST предназначен для отправки данных на сервер. Тип тела запроса указывается в заголовке Content-Type.
            body: JSON.stringify(newTodo),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(todo => this.list.push(todo));
    }
}