/* ============================================================
   Shared behaviour: theme toggle + footer year.
   Dark is the default; an explicit choice is persisted.
   ============================================================ */
(function () {
  var STORAGE_KEY = "anurag-theme";
  var root = document.documentElement;

  // Apply stored theme before first paint (also inlined in <head>).
  function apply(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme"); // fall back to default (dark)
    }
    updateToggleLabel(theme === "light" ? "dark" : "light");
  }

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function updateToggleLabel(next) {
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-label", "Switch to " + next + " theme");
  }

  function init() {
    apply(localStorage.getItem(STORAGE_KEY));

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = current() === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
        updateToggleLabel(next === "light" ? "dark" : "light");
      });
    }

    var y = document.getElementById("footer-year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
