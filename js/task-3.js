function getElementWidth(content, padding, border) {
  const contentBox = Number.parseFloat(content);
  const paddingBox = Number.parseFloat(padding) * 2;
  const borderBox = Number.parseFloat(border) * 2;

  const totalWidth = contentBox + paddingBox + borderBox;
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
