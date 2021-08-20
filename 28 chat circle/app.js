
const circleEl = document.querySelector('.circle');

circleEl.addEventListener('mousedown', onMouseDown);

function onMouseDown(e) {
        console.log(e.target.offsetLeft);
        circleEl.addEventListener('mousemove', onMouseMove);
        circleEl.addEventListener('mouseup', onMouseUp);
    
    }
    
    function onMouseUp(e) {
            circleEl.removeEventListener('mousemove', onMouseMove);
            circleEl.removeEventListener('mouseup', onMouseUp);
        
        }

        
        function onMouseMove(e) {
               // move(e.x, e.y);
    send({
            type: 'move',
        payload: {
                x: e.x,
                y: e.y,            
            }
        })
    }
    
    function move(x, y) {
            circleEl.style.left = x -50 + 'px';
    circleEl.style.top = y - 50 + 'px';
}

console.log(socket);




/* const url = 'wss://fep-app.herokuapp.com/';
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.forms['chat-forms'];
const size = document.getElementById('size');
const color = document.getElementById('color');
const uniqueID = Date.now();
const circle = document.getElementById('circle');
const chatSocket = new ChatSocket(url);
const chatControler = new FormChatController(chatForm, chatMessages, chatSocket);
chatControler.start(); */