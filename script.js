document.addEventListener("DOMContentLoaded", function () {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const loader = $("#loader");
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      loader.style.pointerEvents = "none";
    }
  }, 1500);

  const phrases = ["Mechanical Design", "Robotics & Automation", "Systems Innovation", "Future Engineer"];
  let pi = 0, ci = 0, deleting = false;
  const typing = $("#typing");

  function type() {
    if (!typing) return;
    const word = phrases[pi];
    typing.textContent = word.slice(0, ci);
    if (!deleting && ci < word.length) {
      ci++;
      setTimeout(type, 70);
    } else if (!deleting) {
      deleting = true;
      setTimeout(type, 1200);
    } else if (ci > 0) {
      ci--;
      setTimeout(type, 35);
    } else {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(type, 300);
    }
  }
  type();

  const theme = $("#theme");
  function applyTheme(mode) {
    document.body.classList.toggle("light", mode === "light");
    if (theme) theme.textContent = mode === "light" ? "☾" : "☼";
    localStorage.setItem("portfolio-theme", mode);
  }
  applyTheme(localStorage.getItem("portfolio-theme") || "dark");
  if (theme) theme.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("light") ? "dark" : "light");
  });

  const menu = $("#menu");
  const nav = $(".nav");
  if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));
  $$("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold: 0.1});
  $$(".reveal").forEach(el => observer.observe(el));

  const top = $("#top");
  window.addEventListener("scroll", () => {
    if (top) top.classList.toggle("show", window.scrollY > 450);
  });
  if (top) top.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

  const cursor = $(".cursor");
  document.addEventListener("mousemove", e => {
    if (cursor && window.innerWidth > 900) {
      cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    }
  });
});
