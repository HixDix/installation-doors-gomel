let control = document.getElementById("control");
let login = document.getElementById("login");
let password = document.getElementById("password");
let repeat = document.getElementById("repeat");
let save = document.getElementById("save");

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

save.addEventListener("click", () => {
  if (password.value.length < 7 || password.value.length > 15) {
    alert("Пароль должен быть от 7 до 15 символов");
  } else if (!/[A-Z]/.test(password.value)) {
    alert("Пароль должен содержать хотя бы одну букву в верхнем регистре");
  } else if (!/[a-z]/.test(password.value)) {
    alert("Пароль должен содержать хотя бы одну букву в нижнем регистре");
  } else if (!/[0-9]/.test(password.value)) {
    alert("Пароль должен содержать хотя бы одну цифру");
  } else if (/[^!@#$%^&*A-Z-a-z-0-9]/.test(password.value)) {
    alert(
      "Пароль содержит недопустимые символы. Разрешены английские букы в верхнем и нижнем регистре, цифры и спец.символы(!@#$%^&*)"
    );
  } else if (password.value != repeat.value) {
    alert("Повтор пароля не совпадает");
  } else if (login.value.length < 1) {
    alert("Логин должен содержать хотя бы 1 символ");
  } else {
    localStorage.clear();
    localStorage.setItem(login.value, password.value);
    window.location.href = "log.html";
  }
});
