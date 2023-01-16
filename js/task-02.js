const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.querySelector(
  "#ingredients"
);
// for (const ingredient of ingredients) {
//   const liElem = document.createElement("li");
//   liElem.textContent = ingredient;
//   liElem.classList.add("item");
//   console.log(ingredient);
//   ulElem.appendChild(liElem);
// }

const navItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("link");
  listItem.textContent = ingredient;
  return listItem;
});
ulElem.append(...navItems);
