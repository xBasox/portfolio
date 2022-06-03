// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State of Menu
let isMenuOpen = false;

//Event Listener
menuBtn.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!isMenuOpen) {
    //Set Menu State
    isMenuOpen = true;

    //Logic
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((e) => e.classList.add("show"));
  } else {
    //Set Menu State
    isMenuOpen = false;
    
    //Logic
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((e) => e.classList.remove("show"));
  }
}
