document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const gameContainer = document.getElementById("gameContainer");
  const gameButtons = document.querySelectorAll(".Game_Button");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    gameButtons.forEach((button) => {
      const gameName = button.querySelector("img").alt.toLowerCase();
      if (gameName.includes(searchTerm)) {
        button.style.display = "inline-block";
      } else {
        button.style.display = "none";
      }
    });
  });
});

const splashDuration = 1700;

setTimeout(function () {
  const splashScreen = document.getElementById("splashScreen");
  splashScreen.style.animation = "slidedown 0.9s ease-in-out forwards";

  splashScreen.addEventListener("animationend", function () {
    splashScreen.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  });
}, splashDuration);
