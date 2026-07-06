const APP_ID = "33KbG7ZQDjwyXVXFAGfOl";

const statusText = document.getElementById("status");
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", () => {
    statusText.textContent = "Inaunganisha...";

    const ws = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${APP_ID}`);

    ws.onopen = () => {
        statusText.textContent = "✅ Connected";
        console.log("Connected to Deriv");
    };

    ws.onmessage = (msg) => {
        console.log("Message:", msg.data);
    };

    ws.onerror = (err) => {
        statusText.textContent = "❌ Connection Error";
        console.log("Error:", err);
    };

    ws.onclose = (event) => {
        console.log("Closed:", event.code, event.reason);
    };
});
