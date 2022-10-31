
// const url = "wss://weather-man-map.herokuapp.com";
const url = "ws://localhost:5000";
const socket = new WebSocket(url);
const gif = document.getElementById("gif");

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    gif.style.left = `${data.x}px`;
    gif.style.top = `${data.y}px`;
}
