let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let isRunning = false;
let buttonText = document.getElementById("start-stop");
let records = document.getElementById("records");

function startStop() {
    if (!isRunning) {
        isRunning = true;
        buttonText.textContent = "Stop";
        interval = setInterval(updateTime, 1000);
    } else {
        clearInterval(interval);
        isRunning = false;
        buttonText.textContent = "Start";
        let record = `${hours
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        let li = document.createElement("li");
        li.textContent = record;
        records.appendChild(li);
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.querySelector(".display").textContent = "00:00:00";
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.querySelector(".display").textContent = `${hours
    .toString()
    .padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

document.getElementById("start-stop").addEventListener("click", startStop);