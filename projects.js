// ===== FILTRO DE PROJETOS =====

document.addEventListener("DOMContentLoaded", () => {

  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project-card");

  if (!filters.length || !cards.length) return;

  filters.forEach(button => {

    button.addEventListener("click", () => {

      // remove active do botão atual
      document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      cards.forEach(card => {

        const category = card.dataset.category;

        if (filterValue === "all" || category === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });

  });

});