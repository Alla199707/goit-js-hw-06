// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const incrementBtn = document.querySelector(
  `button[data-action = "increment"]`
);
// console.log(incrementBtn);
const decrementBtn = document.querySelector(
  `button[data-action = "decrement"]`
);
const value = document.getElementById("value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  value.innerHTML = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
};

incrementBtn.addEventListener("click", increment);

decrementBtn.addEventListener("click", decrement);
