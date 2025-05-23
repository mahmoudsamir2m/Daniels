window.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    document.querySelector("nav").classList.add("nav-scroll");
    document.querySelector("nav").classList.remove("navbar-dark");
  } else {
    document.querySelector("nav").classList.remove("nav-scroll");
    document.querySelector("nav").classList.add("navbar-dark");
  }
});
