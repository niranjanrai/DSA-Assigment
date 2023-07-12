// Toggle navbar on click
document.querySelector(".navbar-toggle").addEventListener("click", function () {
  var navbarNav = document.querySelector(".navbar-nav");
  navbarNav.style.display =
    navbarNav.style.display === "block" ? "none" : "block";
});
