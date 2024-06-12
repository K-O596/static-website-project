const keys = document.querySelectorAll(".key");
const keyMap = new Map([
  [65, "C4"],
  [87, "C#4"],
  [83, "D4"],
  [69, "D#4"],
  [68, "E4"],
  [70, "F4"],
  [84, "F#4"],
  [71, "G4"],
  [89, "G#4"],
  [72, "A4"],
  [85, "A#4"],
  [74, "B4"],
  [75, "C5"],
  [79, "C#5"],
  [76, "D5"],
  [80, "D#5"],
  [186, "E5"],
  [222, "F5"],
]);

keys.forEach((key) => {
  key.addEventListener("mousedown", () => playSound(key));
});

window.addEventListener("keydown", (e) => {
  if (keyMap.has(e.keyCode)) {
    playSoundByKeyCode(e.keyCode);
  }
});

function playSoundByKeyCode(keyCode) {
  const note = keyMap.get(keyCode);
  const audio = new Audio(`sounds/${note}.mp3`);
  audio.play();
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (key) {
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 200);
  }
}

function playSound(key) {
  const note = keyMap.get(parseInt(key.getAttribute("data-key")));
  const audio = new Audio(`sounds/${note}.mp3`);
  audio.play();
}
