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
            onNewMessage: this.onNewMessage.bind(this),
            onClose: this.onSocketClose.bind(this),
            onError: this.onSocketError.bind(this),
        };
        this.socket = chatSocket.createSocketChat(config);
    }
    start() {
        this.chatForm.addEventListener('submit', this.onFormSubmit.bind(this));
    }
    
}