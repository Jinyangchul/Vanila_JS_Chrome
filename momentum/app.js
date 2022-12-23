const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const naverLink = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function onClickNaver(event) {
  event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);

naverLink.addEventListener("click", onClickNaver);
