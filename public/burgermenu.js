document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const menu = document.getElementById("menu");

  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
