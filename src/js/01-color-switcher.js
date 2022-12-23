const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyBcg = document.querySelector('body');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnSstopClick);

btnStop.disabled = true;

function onBtnStartClick(event) {
  timerId = setInterval(() => {
    bodyBcg.style.backgroundColor = getRandomHexColor();
  }, 500);
  btnStart.disabled = true;
  btnStop.disabled = false;
  // btnStart.removeEventListener('click', onBtnStartClick);
}

function onBtnSstopClick(event) {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
  // btnStart.addEventListener('click', onBtnStartClick);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
