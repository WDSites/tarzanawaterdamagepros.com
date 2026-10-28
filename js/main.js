(function () {
  "use strict";
  var BREAKPOINT = 900;
  document.documentElement.classList.remove("no-js");
  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-menu");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.documentElement.style.overflow = open && window.innerWidth <= BREAKPOINT ? "hidden" : "";
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > BREAKPOINT) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.documentElement.style.overflow = "";
      }
    });
  }
  var items = document.querySelectorAll(".faq-item");
  for (var i = 0; i < items.length; i++) {
    (function (item) {
      var btn = item.querySelector(".faq-q");
      if (!btn) { return; }
      btn.addEventListener("click", function () {
        var open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    })(items[i]);
  }
})();
