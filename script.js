const APP_ID = "33KbG7ZQDjwyXVXFAGfOl";

const statusText = document.getElementById("status");
const connectBtn = document.getElementById("connectBtn");

let api;

connectBtn.addEventListener("click", async () => {
    statusText.textContent = "Inaunganisha...";

    try {
        api = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${APP_ID}`);

        api.onopen = () => {
            statusText.textContent = "Imeunganishwa na Deriv API";
        };

        api.onerror = () => {
            statusText.textContent = "Hitilafu ya kuunganisha";
        };

        api.onclose = () => {
            statusText.textContent = "Muunganisho umefungwa";
        };

    } catch (error) {
        statusText.textContent = "Error: " + error.message;
    }
});
