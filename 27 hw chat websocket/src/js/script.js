log = console.log;
const url = 'wss://fep-app.herokuapp.com/';

const submit = document.getElementById('btn');
const userNameEl = document.getElementById('autor');
const incomingMessage = document.getElementById('message');
const subscribe = document.getElementById('subscribe');

let socket = null;

function initConnection() {
    socket = new WebSocket(url);
    
    socket.onopen = () => {
        log('socked connected');
    };
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        showMessage(data);
    };
    socket.onclose = () => {
        initConnection();
        log('closed');
    };

    socket.onerror = (err) => {
        log('error message', err);
    };
}

function send(event) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(event));
  }
}
function showMessage(data) {
    const chatForm = createChat();
    const userForm = createUser(data.payload.username);
    const msgForm = createSpan(data.payload.message);
    chatForm.appendChild(userForm);
    chatForm.appendChild(msgForm);
    subscribe.appendChild(chatForm);
    incomingMessage.value = '';

}


initConnection();

submit.addEventListener('click', onSendClick);

function onSendClick(e) {
    e.preventDefault();
   
    send({
    type: "message",
    payload: {
      username: userNameEl.value,
      message: incomingMessage.value,
    },
  });
}

function createChat() {
   const chat = document.createElement('div');
    chat.classList = 'chat';
    log('chat add');
    return chat;
}
function createUser(name) {
    const para = document.createElement('p');
    para.innerHTML = `${name}` + ':' + ' ';
    return para;
}
function createSpan(message) {
    const msgForm = document.createElement('span');
    msgForm.innerHTML = message;
    return msgForm;
}