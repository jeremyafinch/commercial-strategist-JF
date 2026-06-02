/**
 * panels.js - V4 intent panels (POV · Examples · Connect)
 * Empty state until the visitor picks a path (hash URLs still open directly).
 */
(function () {
  "use strict";

  var LEGACY_HASH = {
    "point-of-view": "pov",
    "two-kinds": "pov",
    "selected-work": "examples",
    work: "examples",
    contact: "connect",
  };

  function normalizePanel(id) {
    if (!id) return null;
    var key = id.replace(/^#/, "").toLowerCase();
    if (LEGACY_HASH[key]) return LEGACY_HASH[key];
    if (key === "pov" || key === "examples" || key === "connect") return key;
    return null;
  }

  function panelStack() {
    return document.getElementById("panel-stack");
  }

  function setIdleState() {
    document.body.classList.add("panel-idle");
    document.body.classList.remove("has-panel");
    var nav = document.querySelector(".site-nav__links");
    if (nav) nav.hidden = true;
  }

  function setOpenState() {
    document.body.classList.remove("panel-idle");
    document.body.classList.add("has-panel");
    var nav = document.querySelector(".site-nav__links");
    if (nav) nav.hidden = false;
  }

  function clearHash() {
    var base = window.location.pathname + window.location.search;
    if (window.location.hash) {
      history.replaceState(null, "", base);
    }
  }

  function clearPanels(options) {
    options = options || {};
    var stack = panelStack();

    document.querySelectorAll(".site-panel").forEach(function (el) {
      el.classList.remove("is-active");
      el.hidden = true;
    });

    document.querySelectorAll("[data-panel]").forEach(function (el) {
      el.classList.remove("is-active");
      el.removeAttribute("aria-current");
    });

    if (stack) {
      stack.hidden = true;
    }

    setIdleState();

    if (options.updateHash !== false) {
      clearHash();
    }
  }

  function setPanel(name, options) {
    options = options || {};
    var panelEls = document.querySelectorAll(".site-panel");
    if (!panelEls.length) return;

    var valid = name === "pov" || name === "examples" || name === "connect";
    if (!valid) {
      clearPanels(options);
      return;
    }

    var stack = panelStack();
    if (stack) {
      stack.hidden = false;
    }

    panelEls.forEach(function (el) {
      var active = el.id === "panel-" + name;
      el.classList.toggle("is-active", active);
      el.hidden = !active;
    });

    document.querySelectorAll("[data-panel]").forEach(function (el) {
      var match = el.getAttribute("data-panel") === name;
      el.classList.toggle("is-active", match);
      if (match) {
        el.setAttribute("aria-current", "true");
      } else {
        el.removeAttribute("aria-current");
      }
    });

    setOpenState();

    if (options.updateHash !== false) {
      var hash = "#" + name;
      if (window.location.hash !== hash) {
        history.replaceState(null, "", hash);
      }
    }

    if (options.scroll) {
      var target = stack || document.getElementById("panel-" + name);
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }

  function init() {
    var panelEls = document.querySelectorAll(".site-panel");
    if (!panelEls.length) return;

    var fromHash = normalizePanel(window.location.hash);
    if (fromHash) {
      setPanel(fromHash, { updateHash: false, scroll: false });
    } else {
      clearPanels({ updateHash: false });
    }

    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-panel]");
      if (!trigger) return;

      var panel = trigger.getAttribute("data-panel");
      if (!panel) return;

      event.preventDefault();
      setPanel(panel, { scroll: true });
    });

    window.addEventListener("hashchange", function () {
      var panel = normalizePanel(window.location.hash);
      if (panel) {
        setPanel(panel, { updateHash: false, scroll: true });
      } else {
        clearPanels({ updateHash: false });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
