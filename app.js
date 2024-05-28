const COLOR_BOX = document.getElementById("color-box");

const CHANGE_COLOR_BTN = document.getElementById("change-color-btn");
CHANGE_COLOR_BTN.addEventListener("click", getRandomColor);
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  COLOR_BOX.style.backgroundColor = color;
}
