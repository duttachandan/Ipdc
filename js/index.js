// Initializing AOS
AOS.init();

// Vanila Js

const navCollapse = document.querySelector(".nav-collapse");

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("active");
});
