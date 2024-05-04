const container = document.getElementById("container");
let boxes = 16;
let totalDivs = boxes * boxes;
let boxeSizes = 35;
let boxesArea = boxeSizes * 2;
let sketchArea = boxesArea + totalDivs * 2;

for (let i = 0; i < totalDivs; i++) {
  const div = document.createElement("div");
  div.id = `${i}`;
  div.setAttribute("style", `width: ${boxeSizes}px; height: ${boxeSizes}px;`);
  div.classList.add("etch");
  container.appendChild(div);

  div.addEventListener("click", () => {
    div.classList.toggle("backgroundColorBlack");
  });
}

container.setAttribute("style", `width: ${sketchArea}px;`);
