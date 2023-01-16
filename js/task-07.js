/*Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
оновлюючи властивість font-size. 
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.*/
let controlFont = document.getElementById(
  "font-size-control"
);
let text = document.getElementById("text");
//console.log(controlFont.oninput);
controlFont.oninput = function () {
  //console.log(controlFont.value);
  text.style.fontSize = controlFont.value + "px";
};
