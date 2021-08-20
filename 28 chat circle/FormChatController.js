/* class FormChatController {
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
        this.socket = chatSocket.initSocketChat(config);
    }

    start() {
        this.chatForm.addEventListener('onclick',onFormSubmit.bind(this));
    }

    onSocketOpen() {
        this.add();        
    }

    onMessage(msg) {
        const message = JSON.parse(msg.data);

        console.log('🚀 ~ FormChatController ~ onMessage ~ message', message);
        
       
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
        let colorValue = this.color;
        let sizeValue = this.size;
        let top = e.pageY - 50;
        let left = e.pageX - 50;
        let message = this.update(colorValue, sizeValue,top,left);
        createCircleMessage();
        this.chatForm.sendSocketMessage(this.socket, message);

        this.resetForm();

    }
    


    add() {
        this.socket.send(
            JSON.stringify({
                type: 'add',
                payload: {
                    id: this.uniqueID,
                    color: this.color,
                    size: 100+'px',
                    top: 100,
                    left: 100,
                },
            }),
        );
    }

    update({color,size,top,left}) {
        this.socket.send(
            JSON.stringify({
                type: 'update',
                payload: {
                    id: this.uniqueID,
                    color,
                    size,
                    top,
                    left,
                },
            })
        );
        this.resetForm();
    }
    
    createCircleMessage(message) {

    console.log('🚀 ~ FormChatController ~ renderMessage ~ message', message);
        this.chatMessagesElement.insertAdjacentHTML('beforeend', `<div id = "circle"> ${message.payload.id}</div>`);

    }
    resetForm() {
        console.log('reset form');
        this.chatForm['input-size'].value = '';
    }  

 }
 */