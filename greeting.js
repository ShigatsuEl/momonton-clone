const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `HELLO ${text}`;
}

function loadName() {
  const currentName = localStorage.getItem(USER_LS);
  if (currentName === null) {
    //she is not
  } else {
    paintGreeting(currentName);
  }
}

function init() {
  loadName();
}

init();
