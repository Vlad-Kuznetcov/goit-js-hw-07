const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (text) => {
  const input = text.target.value.trim();
  nameOutput.textContent = input > 0 ? input : "Anonymous";
});
