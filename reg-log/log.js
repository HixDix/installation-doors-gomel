let control = document.getElementById("control");
let login = document.getElementById("login");
let password = document.getElementById("password");
let save = document.getElementById("enter");

control.addEventListener("click", () => {
  if (password.getAttribute("type") == "password") {
    control.classList.add("view");
    password.setAttribute("type", "text");
    repeat.setAttribute("type", "text");
  } else {
    control.classList.remove("view");
    password.setAttribute("type", "password");
    repeat.setAttribute("type", "password");
  }
});

enter.addEventListener('click', () => {
    if (login.value !=localStorage.key(0)) {
        alert('Пользователь не найден')
    } else if (password.value != localStorage.getItem(login.value)){
        alert('Неверный пароль')
    } else {
        window.location.href = "../index.html";
    }
})