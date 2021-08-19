class ChatSocket{
    constructor(url) {
        this.url = url;
    }
    createSocketChat(config) {
        let socket = new WebSocket(this.url);
        socket.onopen = config.onOpen;
        socket.onmessage = config.onMessage;
        socket.onclose = config.onClose;
        socket.onerror = config.onerror;
        return socket;
    }
    sendSocketMessage(socket, message) {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(message));
        }
    }
}




// const url = 'wss://fep-app.herokuapp.com/';
// let socket = null;

// function initConnection() {
//     socket = new WebSocket(url);

//     socket.onopen = () => {
//         console.log('socket connected');
//     };
//     socket.onmessage = (msg) => {
//         const data = JSON.parse(msg.data);
//         move(data.payload.x, data.payload.y);
        
//     };
//     socket.onclose = () => {
//         initConnection();
//         console.log('closed');
//     }
//     socket.onerror = (err) => {
//         console.log('🚀 ~ initConnection ~ err', err);
//     };
// }
// function send(msg) {
//     if (socket.readyState === WebSocket.OPEN) {
//         socket.send(JSON.stringify(msg));
//     }
// }

// initConnection();

