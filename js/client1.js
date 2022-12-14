const socket = io('http://localhost:9001');

const form = document.getElementById('input-container');
const messageInput = document.getElementById('input-message');
const messageContainer = document.querySelector('.chat-section');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'sender');
    socket.emit('send', message);
    messageInput.value = "";
})

form.addEventListener('Choose')

const user_name = prompt("Enter your name to join");
socket.emit('new-user-joined', user_name);

socket.on('user-joined', name => {
    append(`${user_name} joined the chat`, 'receiver');
});
socket.on('receive', data => {
    append(`${user_name}:${data.message}`, 'receiver');
});