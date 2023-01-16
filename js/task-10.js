function getRandomHexColor() {
  return `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector(
    "#controls>input"
  ),
  btnDataCreate: document.querySelector(
    "[data-create]"
  ),
  btnDataDestroy: document.querySelector(
    "[data-destroy]"
  ),
  boxesEl: document.getElementById("boxes"),
};

// refs.boxesEl.style.cssText = `display: 'flex',
// flexWrap: 'wrap',
// alignItems: 'center',
// marginTop:'30px'`;
refs.boxesEl.style.display = "flex";
refs.boxesEl.style.flexWrap = "wrap";
refs.boxesEl.style.alignItems = "center";
refs.boxesEl.style.marginTop = "30px";

refs.inputNumber.addEventListener(
  "input",
  toogleValue
);
refs.btnDataCreate.addEventListener(
  "click",
  () => {
    createBoxes(Number(refs.inputNumber.value));
  }
);
refs.btnDataDestroy.addEventListener(
  "click",
  destroyBoxes
);

let inputValue = 0;
//Получить
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  //console.log(inputValue);
}
//Создать боксы
function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement =
      document.createElement("div");
    divElement.classList = "item";

    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.marginRight = "30px";
    divElement.style.marginBottom = "30px";
    divElement.style.backgroundColor =
      getRandomHexColor();
    divArray.push(divElement);
  }
  return refs.boxesEl.append(...divArray);
}
//Очистить
function destroyBoxes() {
  refs.inputNumber.value = "";
  return (refs.boxesEl.innerHTML = "");
}
