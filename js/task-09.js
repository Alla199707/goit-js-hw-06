function getRandomHexColor() {
  return `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
const btn = document.querySelector(
  ".change-color"
);
const colorSpan =
  document.querySelector(".color");

btn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  //randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor =
    getRandomHexColor();
  colorSpan.innerHTML = getRandomHexColor();
  // btn.focus();
}
