/**
 * scripts.js - modal open/close and About expand/collapse only.
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     Modal
     -------------------------------------------------------------------------- */

  var overlay = document.getElementById("modal-overlay");
  var closeBtn = document.getElementById("modal-close");
  var workCards = document.querySelectorAll(".work-card");
  var modalPanels = document.querySelectorAll(".modal-content");

  if (!overlay) return;

  function getPanel(id) {
    return document.getElementById("modal-" + id);
  }

  function hideAllPanels() {
    modalPanels.forEach(function (panel) {
      panel.hidden = true;
    });
  }

  function openModal(id) {
    var panel = getPanel(id);
    if (!panel) return;

    hideAllPanels();
    panel.hidden = false;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    hideAllPanels();
  }

  workCards.forEach(function (card) {
    card.addEventListener("click", function () {
      var id = card.getAttribute("data-modal");
      if (id) openModal(id);
    });

    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        var id = card.getAttribute("data-modal");
        if (id) openModal(id);
      }
    });
  });

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeModal();
    }
  });

  /* --------------------------------------------------------------------------
     About expand / collapse
     -------------------------------------------------------------------------- */

  var aboutToggle = document.getElementById("about-toggle");
  var aboutExpanded = document.getElementById("about-expanded");

  if (aboutToggle && aboutExpanded) {
    aboutToggle.addEventListener("click", function () {
      var isHidden = aboutExpanded.hidden;

      aboutExpanded.hidden = !isHidden;
      aboutToggle.setAttribute("aria-expanded", isHidden ? "true" : "false");
      aboutToggle.textContent = isHidden ? "− Less" : "+ Background";
    });
  }
})();
