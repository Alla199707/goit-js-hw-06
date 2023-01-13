/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.*/
const inputVal = document.getElementById(
  "validation-input"
);
let totalLenght = inputVal.getAttribute(
  "data-length"
);
let intTotallenght = parseInt(totalLenght, 10);

// console.log(intTotallenght);

inputVal.oninput = function () {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
  if (
    inputVal.value.length !== intTotallenght &&
    inputVal.value.length !== 0
  ) {
    inputVal.classList.add("invalid");
  }
};
