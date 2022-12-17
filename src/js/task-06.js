const input = document.querySelector('#validation-input');
const checkLength = input.dataset.length;
input.addEventListener('blur', onBlur);
function onBlur(event) {
  if (event.currentTarget.value.length === Number(checkLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
