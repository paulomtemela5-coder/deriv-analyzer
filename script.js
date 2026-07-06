const market = document.getElementById("market");
const trend = document.getElementById("trend");
const strength = document.getElementById("strength");
const btn = document.getElementById("analyzeBtn");

btn.onclick = () => {

    market.innerHTML = "Volatility 75";

    const trends = [
        "UP 📈",
        "DOWN 📉",
        "SIDEWAYS ➖"
    ];

    trend.innerHTML =
        trends[Math.floor(Math.random()*3)];

    strength.innerHTML =
        Math.floor(Math.random()*100)+"%";
};
