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

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// Add click event listener to floating__pic-container
const floatingPicContainer = document.querySelector(".floating__pic-container");
floatingPicContainer.addEventListener("click", function() {
  // Astronaut animation
  const astronauts = document.querySelectorAll('.astronaut');

  astronauts.forEach((astronaut, index) => {
      let randomTop, randomLeft, randomRotate;

      if (index === 0) { // First astronaut (bottom to top)
          randomTop = window.innerHeight + 100; // Start from bottom of the page
          randomLeft = Math.random() * (window.innerWidth - astronaut.clientWidth);
          randomRotate = Math.random() * 360; // Random initial rotation
          astronaut.style.transform = 'rotate(' + randomRotate + 'deg)';
          setTimeout(() => {
              astronaut.style.transitionDuration = '20s'; // Longer animation duration
              astronaut.style.transform = 'translateY(-' + (window.innerHeight + 100) + 'px) rotate(' + randomRotate + 'deg)';
          }, 1000); // Delay for CSS styles to apply
      } else if (index === 1) { // Second astronaut (right to left)
          randomTop = Math.random() * (window.innerHeight - astronaut.clientHeight);
          randomLeft = window.innerWidth + 100; // Start from right of the page
          randomRotate = Math.random() * 360; // Random initial rotation
          astronaut.style.transform = 'rotate(' + randomRotate + 'deg)';
          setTimeout(() => {
              astronaut.style.transitionDuration = '20s'; // Longer animation duration
              astronaut.style.transform = 'translateX(-' + (window.innerWidth + 100) + 'px) rotate(' + randomRotate + 'deg)';
          }, 1000); // Delay for CSS styles to apply
      } else { // Third astronaut (left to right)
          randomTop = Math.random() * (window.innerHeight - astronaut.clientHeight);
          randomLeft = -100 - astronaut.clientWidth; // Start from left of the page
          randomRotate = Math.random() * 360; // Random initial rotation
          astronaut.style.transform = 'rotate(' + randomRotate + 'deg)';
          setTimeout(() => {
              astronaut.style.transitionDuration = '20s'; // Longer animation duration
              astronaut.style.transform = 'translateX(' + (window.innerWidth + 100) + 'px) rotate(' + randomRotate + 'deg)';
          }, 1000); // Delay for CSS styles to apply
      }

      astronaut.style.top = randomTop + 'px';
      astronaut.style.left = randomLeft + 'px';
      
      // Remove the astronaut once it reaches the opposite border
      astronaut.addEventListener('transitionend', function() {
          this.remove();
      });
  });
});
