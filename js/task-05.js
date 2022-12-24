const userName = document.querySelector('#name-input');
const enteredName = document.querySelector('#name-output');

userName.addEventListener('input', event => {
  enteredName.textContent = event.currentTarget.value;
});
console.log(userName);
console.log(enteredName);
