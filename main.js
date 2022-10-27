"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarLogo = document.querySelector(".navbar__logo");
const navbarLogoName = document.querySelector(".navbar__logoName");
const navbarMenuItem = document.querySelector(".navbar__menu__item");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--white");
    navbarLogo.classList.add("navbarLogo--white");
    navbarLogoName.classList.add("navbarLogoName--white");
    navbarMenuItem.classList.add("navbarMenuItem--white");
  } else {
    navbar.classList.remove("navbar--white");
    navbarLogo.classList.remove("navbarLogo--white");
    navbarLogoName.classList.remove("navbarLogoName--white");
    navbarMenuItem.classList.remove("navbarMenuItem--white");
  }
});
