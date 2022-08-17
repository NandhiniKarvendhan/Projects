const starsE1 = document.querySelectorAll(".fa-star");
const emojisE1 = document.querySelectorAll(".fa-regular");
const colors = ["red", "blue", "#FEA705", "#F605FE", "#39F666"];
updateRating(4);
starsE1.forEach((starE1, index) => {
  console.log(index);
  starE1.addEventListener("click", () => {
    console.log("clicked");
    updateRating(index);
  });
});

function updateRating(index) {
  starsE1.forEach((starE1, idx) => {
    if (idx < index + 1) {
      starE1.classList.add("active");
    } else {
      starE1.classList.remove("active");
    }
  });

  emojisE1.forEach((emojiE1) => {
    emojiE1.style.transform = `translateX(-${index * 50}px)`;
    emojiE1.style.color = colors[index];
  });
}
