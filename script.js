document.addEventListener("DOMContentLoaded", function() {
  const floatingPicContainer = document.querySelector(".floating__pic-container");
  const astronauts = document.querySelectorAll('.astronaut');
  const backgroundMusic = document.getElementById('backgroundMusic');

  // hide astronauts initially
  astronauts.forEach(function(astronaut) {
    astronaut.style.opacity = 0;
    astronaut.style.pointerEvents = 'none';
  });

  // function to handle click event on floating pic container
  function handleClick() {
    // show astronauts upon click
    astronauts.forEach(function(astronaut) {
      astronaut.style.opacity = 1;
      astronaut.style.pointerEvents = 'auto';
    });

    // play background music only once
    backgroundMusic.play();
    
    // remove the event listener after playing the music once
    floatingPicContainer.removeEventListener('click', handleClick);

    // logic to animate astronauts
    astronauts.forEach((astronaut, index) => {
      let randomTop, randomLeft, randomRotate;

      if (index === 0) { // 1st astronaut = bottom to top
        randomTop = window.innerHeight + 100; // starting from the bottom of the page
        randomLeft = Math.random() * (window.innerWidth - astronaut.clientWidth);
        randomRotate = Math.random() * 360; // random initial movement
        astronaut.style.transform = 'rotate(' + randomRotate + 'deg)';
        setTimeout(() => {
          astronaut.style.transitionDuration = '16s'; // Longer animation duration
          astronaut.style.transform = 'translateY(-' + (window.innerHeight + 100) + 'px) rotate(' + randomRotate + 'deg)';
        }, 1000); // Delay for CSS to start
      } else if (index === 1) { // 2nd astronaut = right to left
        randomTop = Math.random() * (window.innerHeight - astronaut.clientHeight);
        randomLeft = window.innerWidth + 100; // starting from right side of the page
        randomRotate = Math.random() * 360; // random initial movement
        astronaut.style.transform = 'rotate(' + randomRotate + 'deg)';
        setTimeout(() => {
          astronaut.style.transitionDuration = '16s'; // Longer animation duration
          astronaut.style.transform = 'translateX(-' + (window.innerWidth + 100) + 'px) rotate(' + randomRotate + 'deg)';
        }, 1000); // Delay for CSS to start
      } else { // 3rd astronaut = left to right
        randomTop = Math.random() * (window.innerHeight - astronaut.clientHeight);
        randomLeft = -100 - astronaut.clientWidth; // starting from left side
        randomRotate = Math.random() * 360; // random initial movement
        astronaut.style.transform = 'rotate(' + randomRotate + 'deg)';
        setTimeout(() => {
          astronaut.style.transitionDuration = '16s'; // Longer animation duration
          astronaut.style.transform = 'translateX(' + (window.innerWidth + 100) + 'px) rotate(' + randomRotate + 'deg)';
        }, 1000); // Delay for CSS to start
      }

      astronaut.style.top = randomTop + 'px';
      astronaut.style.left = randomLeft + 'px';
      
      // Remove the astronaut when it finishes its spacewalk
      astronaut.addEventListener('transitionend', function() {
        this.remove();
      });
    });
  }

  // Add click event listener to floating pic container
  floatingPicContainer.addEventListener('click', handleClick);
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// close menu when clicking outside
document.addEventListener("click", function(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu.contains(event.target) && !icon.contains(event.target) && menu.classList.contains("open")) {
      toggleMenu(); // close the menu if its a part of the menu iykyk
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
