let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let img = document.querySelectorAll("#img");
let prev_2 = document.querySelector(".prev_2");
let next_2 = document.querySelector(".next_2");
let img_2 = document.querySelectorAll("#img_2");
let i = 0;

prev.addEventListener("click", () => {
  img[i].classList.remove("active");
  i = (i - 1 + img.length) % img.length;
  console.log(i);
  img[i].classList.add("active");
});

next.addEventListener("click", () => {
  img[i].classList.remove("active");
  i = (i + 1) % img.length;
  console.log(i);
  img[i].classList.add("active");
});

prev_2.addEventListener("click", () => {
  img_2[i].classList.remove("active");
  i = (i - 1 + img_2.length) % img_2.length;
  console.log(i);
  img_2[i].classList.add("active");
});

next_2.addEventListener("click", () => {
  img_2[i].classList.remove("active");
  i = (i + 1) % img_2.length;
  console.log(i);
  img_2[i].classList.add("active");
});

