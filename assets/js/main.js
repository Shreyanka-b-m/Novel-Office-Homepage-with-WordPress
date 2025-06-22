document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  const heroHeight = hero.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > heroHeight * 0.2) {
      // Adjust this value as needed
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
