// TOGGLE DISPLAY FUNCTIONS
function toggleCompleted() {
    var content = document.querySelector(".saved-completed");
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

  function toggleCardio() {
    var content = document.querySelector("#cardio-results");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function toggleStrength() {
    var content = document.querySelector("#strength-results");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function toggleStretching() {
    var content = document.querySelector("#stretching-results");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }