let counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
console.log(decrementBtn);
console.log(incrementBtn);
console.log(value);

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
