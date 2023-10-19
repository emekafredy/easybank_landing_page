window.addEventListener('resize', e => {
  if (window.matchMedia(`(min-width: 720px)`).matches) {
    document.getElementById("open-mobile-menu").style.display = "none";
    document.getElementById("close-mobile-menu").style.display = "none";
  } else {
    document.getElementById("open-mobile-menu").style.display = "block";
  }
});

function openMobileMenu() {
  document.getElementById("open-mobile-menu").style.display = "none";
  document.getElementById("close-mobile-menu").style.display = "block";

  document.getElementById("mobile-menu").style.inset = "0px";
  document.getElementById("mobile-menu").style.top = "20";
  document.getElementById("mobile-menu-overlay").style.inset = "0px";
  document.getElementById("mobile-menu-overlay").style.top = "16";
};

function closeMobileMenu() {
  document.getElementById("close-mobile-menu").style.display = "none";
  document.getElementById("open-mobile-menu").style.display = "block";

  document.getElementById("mobile-menu").style.top = "-100%";
  document.getElementById("mobile-menu-overlay").style.top = "100%";
};
