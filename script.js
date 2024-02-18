function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to close menu when clicking outside
document.addEventListener("click", function(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // Check if the clicked element is not part of the menu or the hamburger icon and the menu is open
  if (!menu.contains(event.target) && !icon.contains(event.target) && menu.classList.contains("open")) {
      toggleMenu(); // If so, close the menu
  }
});

// Dark / light mode
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function() {
  setTheme();
});

btn2.addEventListener("click", function() {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
      setLightMode();
  } else {
      setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-light");
  });
}



var profilePic = document.getElementById("profilePic");
var profileElements = document.querySelectorAll(".profile-element");

/* document.querySelector('a[href="#2048"]').addEventListener("click", function(event) {
  event.preventDefault(); 
  var game = new Game(4);
  game.setup();
}); */


