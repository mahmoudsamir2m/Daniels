const aboutSection = document.querySelector("section#about");
window.addEventListener("scroll", () => {
  if (window.scrollY > aboutSection.offsetTop-100) {
    document.querySelector("nav").classList.add("nav-scroll");
    document.querySelectorAll("#nav-list a[class]").forEach((el) => {
      el.classList.add("bg-after");
    });
    document.querySelector("nav").classList.remove("navbar-dark");
  } else {
    document.querySelector("nav").classList.remove("nav-scroll");
    document.querySelectorAll("#nav-list a[class]").forEach((el) => {
      el.classList.remove("bg-after");
    });
    document.querySelector("nav").classList.add("navbar-dark");
  }
});
