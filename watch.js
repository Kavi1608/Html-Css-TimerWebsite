let startTime = 0;
let elapsedTime = 0;
let intervalId;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
    running = true;
    stopBtn.disabled = false;
    startBtn.disabled = true;
  }
}

function stopTimer() {
  clearInterval(intervalId);
  running = false;
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  running = false;
  stopBtn.disabled = true;
  startBtn.disabled = false;
  display.textContent = "00:00:00";
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  display.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);