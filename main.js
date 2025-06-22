$(document).ready(function () {
  // Smooth scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        { scrollTop: $(hash).offset().top },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Dynamic title + active link
document.addEventListener("DOMContentLoaded", function () {
  const navTitle = document.querySelector("#part-1 h1");
  const navLinks = document.querySelectorAll("#part-2 a");

  const sections = [
    { id: "page-1", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "project-section", title: "Projects" },
    { id: "skill-section", title: "Skills" },
    { id: "contact-section", title: "Contact" }
  ];

  const options = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const current = sections.find((s) => s.id === entry.target.id);
        if (current) {
          // Update navbar title
          navTitle.textContent = current.title;

          // Highlight the active link
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current.id}`) {
              link.classList.add("active");
            }
          });
        }
      }
    });
  }, options);

  // Observe all defined sections
  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });
});
