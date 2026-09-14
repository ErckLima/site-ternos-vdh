(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5531982729433";

  // ---- WhatsApp links ----
  document.querySelectorAll(".wa-btn").forEach(function (el) {
    var msg = el.getAttribute("data-msg") || "Olá, estou vindo do site.";
    el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // ---- Header state on scroll ----
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById("nav-toggle");
  navToggle.addEventListener("click", function () {
    var isOpen = header.classList.toggle("nav-open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("nav-open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  // ---- Gallery drag-to-scroll + arrows ----
  var track = document.getElementById("gallery-track");
  if (track) {
    var isDown = false, startX, scrollStart;

    track.addEventListener("mousedown", function (e) {
      isDown = true;
      startX = e.pageX;
      scrollStart = track.scrollLeft;
    });
    window.addEventListener("mouseup", function () { isDown = false; });
    window.addEventListener("mouseleave", function () { isDown = false; });
    track.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      track.scrollLeft = scrollStart - (e.pageX - startX);
    });

    var cardWidth = function () {
      var card = track.querySelector(".gallery-card");
      return card ? card.getBoundingClientRect().width + 22 : 320;
    };

    var prevBtn = document.querySelector(".gallery-prev");
    var nextBtn = document.querySelector(".gallery-next");
    if (prevBtn) prevBtn.addEventListener("click", function () {
      track.scrollBy({ left: -cardWidth(), behavior: "smooth" });
    });
    if (nextBtn) nextBtn.addEventListener("click", function () {
      track.scrollBy({ left: cardWidth(), behavior: "smooth" });
    });
  }

  // ---- Hero parallax (subtle) ----
  var heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = "scale(1.08) translateY(" + y * 0.12 + "px)";
      }
    }, { passive: true });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
