
const url = "wss://weather-man-map.herokuapp.com";
const socket = new WebSocket(url);
const gif = document.getElementById("gif");

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const x = gif.offsetTop;
    const y = gif.offsetLeft;
    
    gif.style.left = `${data.x + x}px`;
    gif.style.top = `${data.y + y}px`;
}