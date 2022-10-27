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

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(e.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
