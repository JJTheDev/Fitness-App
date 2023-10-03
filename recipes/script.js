// TOGGLE DISPLAY FUNCTIONS
function toggleFavorites() {
    var content = document.querySelector(".saved-favorites");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function toggleTry() {
    var content = document.querySelector(".saved-try");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }