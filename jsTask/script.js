const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const btnContainer = document.getElementById('btn-container');
const middleBlock = document.getElementById('middle-btn');

let interval = null;
let time = 0;
let dynamicBtns = [];

function displayTimer() {
    timerDisplay.textContent = time + " seconds";
}

function addButtons() {
    const btnAbove = document.createElement('button');
    btnAbove.textContent = `Blue`;
    btnAbove.className = 'dynamic-btn-blue';
    btnContainer.insertBefore(btnAbove, middleBlock);
    dynamicBtns.push(btnAbove);

    const btnBelow = document.createElement('button');
    btnBelow.textContent = `Orange`;
    btnBelow.className = 'dynamic-btn-orange';
    if (middleBlock.nextSibling) {
        btnContainer.insertBefore(btnBelow, middleBlock.nextSibling);
    } else {
        btnContainer.appendChild(btnBelow);
    }
    dynamicBtns.push(btnBelow);
}

function clearDynamicButtons() {
    dynamicBtns.forEach(btn => btn.remove());
    dynamicBtns = [];
}

function startTimer() {
    if (interval) return;
    time = 0;
    displayTimer();
    clearDynamicButtons();
    interval = setInterval(() => {
        if (time < 10) {
            time++;
            displayTimer();
            addButtons();
        } else {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    time = 0;
    displayTimer();
    clearDynamicButtons();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
displayTimer();