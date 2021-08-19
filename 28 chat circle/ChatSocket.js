

const url = 'wss://fep-app.herokuapp.com/';
let socket = null;

function initConnection() {
    socket = new WebSocket(url);

    socket.onopen = () => {
        console.log('socket connected');
    };
    socket.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        move(data.payload.x, data.payload.y);
        
    };
    socket.onclose = () => {
        initConnection();
        console.log('closed');
    }
    socket.onerror = (err) => {
        console.log('🚀 ~ initConnection ~ err', err);
    };
}
function send(msg) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(msg));
    }
}

initConnection();

