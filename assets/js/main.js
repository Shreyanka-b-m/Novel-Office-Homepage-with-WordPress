document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const logo = document.querySelector(".site-logo");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      if (logo) {
        logo.src = logo.getAttribute("data-scrolled");
      }
    } else {
      header.classList.remove("scrolled");
      if (logo) {
        logo.src = logo.getAttribute("data-default");
      }
    }
  });
});
