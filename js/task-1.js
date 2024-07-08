const categories = document.querySelector("#categories");
const categoriesItems = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoriesEls = item.querySelectorAll("ul>li").length;
  console.log(`Category: ${categoryTitle} \nElements: ${categoriesEls}`);
});
