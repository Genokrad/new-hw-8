const form = document.querySelector('.form');

form.addEventListener('input', createInputObj);
form.addEventListener('submit', formHandler);

const inputKey = {};

function createInputObj(event) {
  const { name, value } = event.target;
  if (name) {
    inputKey[name] = value;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    });
}

function formHandler(event) {
  event.preventDefault();
  const { amount, delay, step } = inputKey;
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, Number(delay) + Number(step) * i);
  }
}
