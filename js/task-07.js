const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.log(inputRef);
console.log(text);
inputRef.addEventListener('input', event => {
  const fontSize = event.currentTarget.value;
  textRef.style.fontSize = `${fontSize}px`;
});
