const userName = document.querySelector("#name-input");
const enteredName = document.querySelector("#name-output");

userName.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (enteredName.textContent = "Anonymous");
  }
  enteredName.textContent = event.currentTarget.value;
});
console.log(userName);
console.log(enteredName);
