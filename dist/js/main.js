"use strict";
(function ($) {})(jQuery);

// Init Swiper
var swiper = new Swiper(".banner-slider", {
  // Install Plugin To Swiper
  effect: "fade",
  speed: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  debugger: true,

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

let addToFavorite = document.querySelectorAll(".add-to-favorite");
if (addToFavorite) {
  addToFavorite.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log(e);
      btn.classList.toggle("active");
    });
  });
}

let btnShowShare = document.querySelectorAll(".btn-share");
if (btnShowShare) {
  btnShowShare.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log(e.target.parentNode.nextElementSibling);
      e.target.parentNode.nextElementSibling.classList.toggle("showing");
    });
  });
}

// Define Overlay For All
let bodyOverlay = document.querySelector("body");
let divBG = document.createElement("div");
divBG.className = "overlay-bg";
bodyOverlay.appendChild(divBG);

// Toggle toggle Header Menu
const toggleMenuMobile = document.querySelector(".toggle-menu-mobile");
const headerNavMenu = document.querySelector(".main-header nav");
const closeMenuMobile = document.querySelector(".close-menu-mobile");

if ((toggleMenuMobile, divBG, closeMenuMobile)) {
  toggleMenuMobile.addEventListener("click", toggleMenuNav, { passive: true });
  divBG.addEventListener("click", closeMenuNav, { passive: true });
  closeMenuMobile.addEventListener("click", closeMenuNav, { passive: true });
}
function toggleMenuNav() {
  headerNavMenu.classList.add("showing");
  divBG.className = "overlay-bg showing";
}
function closeMenuNav() {
  headerNavMenu.classList.remove("showing");
  divBG.classList.remove("showing");
}

mixitup('.mixing', {
	animation: {
    effects: 'fade',
    duration: 600
  },
  selectors: {
    target: '.mix'
  }
});