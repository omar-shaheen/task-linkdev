"use strict";
(function ($) {})(jQuery);

/* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
    // console.log("init");
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
    // console.log("click");
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    // console.log("tap");
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    // console.log("doubleTap");
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
    // console.log("sliderMove");
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
    // console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
    // console.log("slideChangeTransitionStart");
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
    // console.log("slideChangeTransitionEnd");
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
    // console.log("transitionStart");
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
    // console.log("transitionEnd");
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
    // console.log("fromEdge");
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
    // console.log("reachBeginning");
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
    // console.log("reachEnd");
  });
}

// Init Swiper
var swiper = new Swiper(".banner-slider", {
  // Install Plugin To Swiper
  effect: "fade",
  speed: 50,
  modules: [myPlugin],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // Enable debugger
  debugger: true,

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
});

// let buliltsBanner = document.querySelectorAll(
//   ".swiper-pagination.swiper-pagination-horizontal.swiper-pagination-bullets span"
// );
// buliltsBanner.forEach((el) => {
//   // console.log(el);
//   el.insertAdjacentHTML("afterend", '<b class="dots-builts"></b>');
// });

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
btnShowShare.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target.parentNode.nextElementSibling);
    e.target.parentNode.nextElementSibling.classList.toggle("showing");
  });
});

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

var mixer = mixitup(".mixing", {
  selectors: {
      target: '.mix'
  },
  animation: {
      duration: 300
  }
});