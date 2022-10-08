const magnifier = document.querySelector(".magnifier");
const container = document.querySelector(".search-bar-container");
magnifier.addEventListener("click", () => {
  container.classList.toggle("active");
});
