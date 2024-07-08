function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputNum = controls.querySelector("#input-number");
const createBut = controls.querySelector("[data-create]");
const destroyBut = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBut.addEventListener("click", () => {
  const amount = parseInt(inputNum.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNum.value = "";
  } else {
    alert("enter 1 ... 100");
  }
});

destroyBut.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.innerHTML = "";
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
