'use strict';

function toggle() {
  var nav = document.getElementById("main-nav");
  var button = document.getElementById("menu");
  var site = document.getElementById("wrap");

  if (nav.className == "menu-open") {
    nav.className = "";
    button.className = "";
    site.className = "";
  } else {
    nav.className += "menu-open";
    button.className += "btn-close";
    site.className += "fixed";
  }
}

// toggle();

var menuAnimation = function() {
  $('.icon-menu').on('click', function() {
    $('.main-nav ul').slideToggle('fast');
  });
};

menuAnimation();