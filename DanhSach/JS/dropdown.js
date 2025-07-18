// === dropdown.js ===
document.addEventListener("click", function (e) {
    const isDropBtn = e.target.closest(".dropbtn");
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(dropdown => {
      const content = dropdown.querySelector(".dropdown-content");
      if (dropdown.contains(e.target)) {
        dropdown.classList.toggle("show");
      } else {
        dropdown.classList.remove("show");
      }
    });
  });
  