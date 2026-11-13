const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const sendBtn = document.getElementById('send');

// Send button click event
sendBtn.onclick = () => {
    sendMessage();
};

// Enter key press event kooda add chesthe baguntundi
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const t = input.value.trim();
    if (!t) return;
    
    add('YOU: ' + t, 'user');
    input.value = '';
    
    add('J.A.R.V.I.S: Processing...', 'ai');
    
    setTimeout(() => {
        // Safe check so lastChild erruralsu rakunda undataniki
        if (chat.lastChild) {
            chat.lastChild.innerText = 'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';
            chat.scrollTop = chat.scrollHeight;
        }
    }, 1000);
}

function add(text, who) {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.innerText = text;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
}
