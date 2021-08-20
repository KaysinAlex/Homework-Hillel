class FormChatController {
    constructor(
        chatForm, chatMessagesElement,
        chatSocket
    ) {
        this.chatForm = chatForm;
        this.chatMessagesElement = chatMessagesElement;
        this.chatSocket = chatSocket;
        this.initSocket();
    }
    
    initSocket() {
        let config = {
            onOpen: this.onSocketOpen.bind(this),
            onMessage: this.onMessage.bind(this),
            onClose: this.onSocketClose.bind(this),
            onError: this.onSocketError.bind(this),
        };
        this.socket = chatSocket.createSocketChat(config);
    }

    start() {
        this.chatForm.addEventListener('submit', this.onFormSubmit(this));
    }

    onSocketOpen(event) {
        let socket = event.target;
        let message = {
            type: 'add',
            payload: {
                id: 'uniqueID',
                color: 'red',
                size: 50 +'px',
                x: 50 +'px',
                y: 50+'px',
            },
        }
        this.chatSocket.sendSocketMessage(socket, message);
        console.log('🚀 ~ FormChatController ~ onSocketOpen ~ socket, message', socket, message);
        console.log('Отправляем на сервер');
        
    }

    onMessage(msg) {
        const message = JSON.parse(msg.data);
        console.log('🚀 ~ FormChatController ~ onMessage ~ message', message);
        
        this.renderMessage(message);
    }
    onSocketClose() {
        console.log('close');
        this.initSocket();
    }
    onSocketError(err) {
        console.log(`[error] ${err.message}`);
}
    onFormSubmit(event) {
        event.preventDefault();
        let colorValue = this.getColorValue();
        let sizeValue = this.getSizeValue();
        let message = this.readyMessage(colorValue, sizeValue);

        this.chatForm.sendSocketMessage(this.socket, message);

        this.resetForm();

    }
    renderMessage(message) {
    console.log('🚀 ~ FormChatController ~ renderMessage ~ message', message);
        this.chatMessagesElement.insertAdjacentHTML('beforeend', `<div class = "circle"> ${message.payload}</div>`);
    }
    resetForm() {
        console.log('reset form');
        this.chatForm['input-size'].value = '';
    }
    readyMessage(colorValue, sizeValue) {
        console.log('readyMessage');
        return {
            type: 'update',
            payload:
            {
                id:'uniqueID',
                color: colorValue,
                size: sizeValue,
                x: e.x,
                y: e.y
            }
        }
    }
    getColorValue() {
        return this.chatForm.elements['input-color'].value;
    }

    getSizeValue() {        
        return this.chatForm.elements['input-size'].value;
    }
   

 }
