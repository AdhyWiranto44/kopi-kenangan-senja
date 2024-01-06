// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () =>
  navbarNav.classList.toggle("active");

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika hamburger menu di klik
document.querySelector("#search-button").onclick = e => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik di luar sidebar untuk menyembunyikan sidebar
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  // e.preventDefault();
});
