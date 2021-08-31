// Toggle Side Menu
let navBar = document.querySelector("nav");
let myNav = document.getElementById("nav-bar");
let navLinks = myNav.querySelectorAll("li");
let hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click", () => {
  myNav.classList.toggle("active");
  hamMenu.classList.toggle("fa-times");
});
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    myNav.classList.remove("active");
    hamMenu.classList.toggle("fa-times");
  });
});

window.onscroll = function () {
  // Scroll Indicator
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scroll = (pos * 100) / calcHeight;
  document.getElementById("progress").style.width = `${scroll}%`;
};
