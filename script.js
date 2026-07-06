const welcome = document.getElementById("welcome");
const dashboard = document.getElementById("dashboard");

document.getElementById("startBtn").onclick = () => {
    welcome.style.display = "none";
    dashboard.style.display = "block";
};
