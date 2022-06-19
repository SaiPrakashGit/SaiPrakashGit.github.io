// JavaScript logic to switch themes and store it in  browser's storage

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("blue");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
    playTone();
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "light.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

const tone = document.getElementById("audio");
tone.volume = 0.5;

tone.src = `assets/click_tone.mp3`;

// Play Click-Tone
function playTone() {
  tone.play();
}
