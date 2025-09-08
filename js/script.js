// progression bar
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = document.querySelectorAll(".skill-fill");
        fills.forEach((fill) => {
          const percent = fill.getAttribute("data-percent");
          fill.style.width = percent;
        });
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.4,
  }
);
const skillSection = document.querySelector(".the-skill");
observer.observe(skillSection);
