const APP_ID = "33KbG7ZQDjwyXVXFAGfOl";

const statusText = document.getElementById("status");
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", () => {
    statusText.textContent = "Inaunganisha...";

    const ws = new WebSocket(
        `wss://ws.derivws.com/websockets/v3?app_id=${APP_ID}`
    );

    ws.onopen = () => {
        statusText.textContent = "✅ Imeunganishwa na Deriv";

        ws.send(JSON.stringify({
            ping: 1
        }));
    };

    ws.onmessage = (event) => {
        console.log(event.data);
    };

    ws.onerror = () => {
        statusText.textContent = "❌ Connection Error";
    };

    ws.onclose = () => {
        console.log("Connection closed");
    };
});
