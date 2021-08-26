const url = 'wss://fep-app.herokuapp.com/';
let socket = null;





let myBall = {
    id: Date.now(),
    color: '#f00',
    size: 100,
    x: 150,
    y: 150
}
let balls = [];

const container = document.querySelector('.container');

document
.querySelector('#ballColorPicker')
.addEventListener('change', onBallPropertyUpdate);

document
    .querySelector('#ballSizePicker')
    .addEventListener('change', onBallPropertyUpdate);

    container.addEventListener('click', onContainerClick);
    
    function initConnection() {
        socket = new WebSocket(url);
        socket.onopen = () => {
          addBall(myBall);
        }

        socket.onmessage = (e) => {
            const msg = JSON.parse(e.data);
            console.log('socket.onmessage -> e.data', e.data);

            switch (msg.type) {
                case 'add':
                    return pushBall(msg.payload);
                case 'update':
                    return updateBall(msg.payload);
            }
        }
        


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

    

function onBallPropertyUpdate(e) {
    console.log('onBallPropertyUpdate -> e', e);
    updateMyBall({ [e.target.name]: e.target.value });
}
function onContainerClick(e) {

    updateMyBall({
        x: e.x,
        y: e.y,
    });
}
function addBall(ball) {
    console.log('addBall -> ball', ball);
    send({
        type: 'add',
        payload: ball,
    });
}

function pushBall(ball) {
    console.log('pushBall -> ball', ball);
    
    balls.push(ball);

    renderBall(ball);
    console.log('pushBall -> ball', ball);
}

function updateBall(ball) {
    console.log('updateBall -> ball', ball);
    const renderedBall = balls.find((b) => b.id === ball.id)
    if (!renderedBall) {
        return;
    }

    updateBallElement(renderedBall.el, ball);
    console.log('updateBall -> renderedBall.el', renderedBall.el);
}

function updateMyBall(changes ) {
    console.log('updateMyBall -> changes', changes);
    myBall = {...myBall, ...changes};
    
    send({
        type: 'update',
        payload: myBall,
    });
}
    
function renderBall(ball) {
console.log('renderBall -> ball', ball);
    
    const ballEl = createBallElement(ball);

    ball.el = ballEl;

    container.append(ballEl);
}

function createBallElement(ball) {
   console.log('createBallElement -> ball', ball);
   const el= document.createElement('div');

    el.className = 'circle';
    
    updateBallElement(el, ball);

    return el;
}

function updateBallElement(el, ball) {
    console.log('updateBallElement -> ball', ball);
    console.log('updateBallElement -> el', el);
    el.style.top = ball.y - ball.size / 2 + 'px';
    el.style.left = ball.x - ball.size / 2 + 'px';
    el.style.height = ball.size + 'px';
    el.style.width = ball.size + 'px';
    el.style.backgroundColor = ball.color;
}
initConnection();