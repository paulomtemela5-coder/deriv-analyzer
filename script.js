const statusText = document.getElementById("status");
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", () => {
    statusText.textContent = "Inaunganisha...";
    
    setTimeout(() => {
        statusText.textContent = "Imeunganishwa (Mfano)";
    }, 1500);
});
