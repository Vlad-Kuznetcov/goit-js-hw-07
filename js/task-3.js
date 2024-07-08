const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (text) => {
  const input = text.target.value.trim();
  output.textContent = input.length > 0 ? input : "Anonymous";
});
