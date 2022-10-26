
const url = "ws://localhost:5000";
const socket = new WebSocket(url);
const gif = document.getElementById("gif");
const x = gif.offsetTop;
const y = gif.offsetLeft;

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    gif.style.left = `${data.x + x}px`;
    gif.style.top = `${data.y + y}px`;
}