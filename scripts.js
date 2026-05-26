/**
 * scripts.js - modal open/close only.
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     Modal
     -------------------------------------------------------------------------- */

  var overlay = document.getElementById("modal-overlay");
  var closeBtn = document.getElementById("modal-close");
  var workCards = document.querySelectorAll(".work-card[data-modal]");
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

  function buildYouTubeEmbedSrc(embedUrl) {
    var url = new URL(embedUrl);

    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
      url.searchParams.set("origin", window.location.origin);
    }

    return url.toString();
  }

  function loadModalVideos(panel) {
    panel.querySelectorAll(".modal-video iframe[data-src]").forEach(function (iframe) {
      if (!iframe.src) {
        iframe.src = buildYouTubeEmbedSrc(iframe.getAttribute("data-src"));
      }
    });
  }

  function unloadModalVideos() {
    document.querySelectorAll(".modal-video iframe").forEach(function (iframe) {
      iframe.removeAttribute("src");
    });
  }

  function openModal(id) {
    var panel = getPanel(id);
    if (!panel) return;

    hideAllPanels();
    unloadModalVideos();
    panel.hidden = false;
    loadModalVideos(panel);
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    unloadModalVideos();
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
})();
