/**
 * work-carousel.js - manual featured-work image carousel (no autoplay).
 */
(function () {
  "use strict";

  document.querySelectorAll("[data-work-carousel]").forEach(function (root) {
    var slides = Array.prototype.slice.call(
      root.querySelectorAll(".work-carousel__slide")
    );
    var prevBtn = root.querySelector(".work-carousel__btn--prev");
    var nextBtn = root.querySelector(".work-carousel__btn--next");
    var viewport = root.querySelector(".work-carousel__viewport");
    var index = 0;

    if (slides.length < 2) {
      if (prevBtn) prevBtn.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      return;
    }

    function goTo(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, i) {
        var active = i === index;
        slide.hidden = !active;
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function (event) {
        event.preventDefault();
        goTo(index - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function (event) {
        event.preventDefault();
        goTo(index + 1);
      });
    }

    if (viewport) {
      viewport.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(index - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(index + 1);
        }
      });
    }

    goTo(0);
  });
})();
