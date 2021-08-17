export default class BaseCollection {
    constructor() {
        this.list = [];
        this._url = null;
    }
    getList() {
        console.log('use fetch to get List');
        return fetch(this._url)
            .then((resp) => resp.json())
            .then((data) => this.setData(data));
    }
    setData(data) {
        this.list = data;
        console.log('this.list = data')
    }
}