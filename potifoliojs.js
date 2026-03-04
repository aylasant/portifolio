const svg = document.querySelector(".organic-lines");

let angle = 0;

function animate() {
  angle += 0.2;
  const scale = 1 + Math.sin(angle * 0.05) * 0.03;
  svg.style.transform = `rotate(${angle}deg) scale(${scale})`;
  requestAnimationFrame(animate);
}

animate();

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    cards.forEach(card => {
      if (filterValue === "all" || card.dataset.category === filterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});

const arrow = document.querySelector(".scroll-indicator");

arrow.addEventListener("click", () => {
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -10) {
      currentSectionIndex = index;
      return;
    }
  });

  const nextSection = sections[currentSectionIndex + 1];

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
});