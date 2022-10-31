
const url = "wss://weather-man-map.herokuapp.com";
// const url = "ws://localhost:5000";
const socket = new WebSocket(url);
const gif = document.getElementById("gif");
let x = gif.offsetTop;
let y = gif.offsetLeft;

onload = (event) => {
    const data = JSON.stringify({initialPosition: {x, y}});
    socket.send(data)
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (!data.initialPosition) {
        gif.style.left = `${data.x}px`;
        gif.style.top = `${data.y}px`;
    }
}
