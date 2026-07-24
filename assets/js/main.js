(function () {
  document.documentElement.classList.remove("no-js");

  const toggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }

  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll(".section").forEach(function (section) {
      observer.observe(section);
    });
  } else {
    document.querySelectorAll(".section").forEach(function (section) {
      section.classList.add("visible");
    });
  }
})();
