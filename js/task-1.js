const categories = document.querySelector("#categories");
const categoriesChildEl = categories.childElementCount;
console.log(`Number of categories: ${categoriesChildEl}`);

const categoriesItems = document.querySelectorAll("#categories li.item");

categoriesItems.forEach((element) => {
  const h2 = element.querySelector("h2").textContent;
  const li = element.querySelectorAll("li").length;
  console.log(`Category: ${h2}`);
  console.log(`Elements: ${li}`);
});
