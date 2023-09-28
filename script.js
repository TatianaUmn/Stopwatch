/* Выбор императивной парадигмы обоснован тем, что секундомер требует управления состоянием (запуск, пауза, возобновление, остановка) и выполнения последовательных операций (обновление времени каждую секунду). Императивный стиль программирования позволяет легко управлять состоянием и последовательностью операций. */


let startTime;            // переменные для хранения состояния секундомера
let running = false;
let paused = false;
let elapsedTime = 0;

function startStopwatch() {         //запуск
  if (!running) {
    startTime = new Date().getTime() - elapsedTime;
    running = true;
    updateTimer();
  }
}

function pauseStopwatch() {        //пауза
  if (running && !paused) {
    paused = true;
  }
}

function resumeStopwatch() {         //возобнавление секундомера
  if (running && paused) {
    paused = false;
    startTime = new Date().getTime() - elapsedTime;
    updateTimer();
  }
}

function stopStopwatch() {      // остановка
  if (running) {
    running = false;
    paused = false;
    elapsedTime = 0;
    document.getElementById("timer").textContent = "00:00:00";
  }
}

function updateTimer() {          // обновление отображения времени при работающем секундомере
  if (running && !paused) {
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    hours = padTime(hours);
    minutes = padTime(minutes);
    seconds = padTime(seconds);

    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;

    setTimeout(updateTimer, 1000);
  }
}

function padTime(time) {        // добаление 0 к числам меньше 10, чтобы время отображалось в формате 00:00:00
  return time.toString().padStart(2, "0");
}