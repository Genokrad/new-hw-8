const form = document.querySelector('.form');

form.addEventListener('input', createInputObj);

const inputKey = {};

function createInputObj(event) {
  const { name, value } = event.target;
  if (name) {
    inputKey[name] = value;
  }
  form.addEventListener('submit', formHandler);
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
    if (i === 0) {
      createPromise(1, Number(delay));
    } else if (i === 1) {
      createPromise(2, Number(delay) + Number(step));
    } else {
      createPromise(i + 1, Number(delay) + Number(step * i));
    }
  }
}
