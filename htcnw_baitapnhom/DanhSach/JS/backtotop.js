// === backToTop.js ===
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
