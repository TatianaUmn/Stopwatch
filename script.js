/* ����� ������������ ��������� ��������� ���, ��� ���������� ������� ���������� ���������� (������, �����, �������������, ���������) � ���������� ���������������� �������� (���������� ������� ������ �������). ������������ ����� ���������������� ��������� ����� ��������� ���������� � ������������������� ��������. */


let startTime;            // ���������� ��� �������� ��������� �����������
let running = false;
let paused = false;
let elapsedTime = 0;

function startStopwatch() {         //������
  if (!running) {
    startTime = new Date().getTime() - elapsedTime;
    running = true;
    updateTimer();
  }
}

function pauseStopwatch() {        //�����
  if (running && !paused) {
    paused = true;
  }
}

function resumeStopwatch() {         //������������� �����������
  if (running && paused) {
    paused = false;
    startTime = new Date().getTime() - elapsedTime;
    updateTimer();
  }
}

function stopStopwatch() {      // ���������
  if (running) {
    running = false;
    paused = false;
    elapsedTime = 0;
    document.getElementById("timer").textContent = "00:00:00";
  }
}

function updateTimer() {          // ���������� ����������� ������� ��� ���������� �����������
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

function padTime(time) {        // ��������� 0 � ������ ������ 10, ����� ����� ������������ � ������� 00:00:00
  return time.toString().padStart(2, "0");
}