const startBtn=document.getElementById("startBtn");

const welcome=document.getElementById("welcome");

const home=document.getElementById("home");

startBtn.onclick=function(){

welcome.style.display="none";

home.classList.remove("hidden");

}
