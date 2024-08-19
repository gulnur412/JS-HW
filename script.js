const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timerDisplay = document.getElementById("timerDisplay");

const restartBtn = document.getElementById("restart");
const startBtn = document.getElementById("start");

let minutesValue;
let secondsValue;

minutes.addEventListener("input", () => {
  minutesValue = Number(minutes.value);
});

let interval;
let showButton = false;

seconds.addEventListener("input", () => {
  secondsValue = Number(seconds.value);
});

startBtn.addEventListener("click", () => {


  if (minutes.value.trim().length === 0 && seconds.value.trim().length === 0) {
    return alert("enter your number");
  }

  if (!showButton) {
    console.log("render 1");
    startBtn.textContent = "PUASE";
    showButton = true;
    interval = setInterval(() => {
      if (secondsValue > 0) {
        secondsValue--;
      } else {
        secondsValue = 59;
        minutesValue--;
      }
      if (minutesValue < 0) {
        clearInterval(interval);
      }
      timerDisplay.textContent = `${minutesValue}:${secondsValue}`;
    }, 1000);
  } else {
    console.log("render 2");
    startBtn.textContent = "START";
    clearInterval(interval);
    showButton = false;
  }
});

restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  timerDisplay.textContent = "00:00";
  minutesValue = 0;
  secondsValue = 0;
  startBtn.textContent = "START";
  showButton = false;
});

// zadacha-2
// const h3 = document.getElementById("h3");
// setInterval(() => {
//   h3.textContent = "ураа";
//   console.log(setInterval);
// }, 10000);

// // zadacha-3
// const divname = document.getElementById("divname");
// let redcollor = ["blue", "Green", "Yellow", "Orange", "Purple"];

// let shot = 0;
// function inter() {
//   divname.style.backgroundColor  = redcollor[shot];
//   shot++;
//   if (shot > red.length - 1) {
//     shot = 0;
//   }
// }
// setInterval(inter, 1000);
