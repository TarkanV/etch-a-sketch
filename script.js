const gridNode = document.querySelector(".grid-container");

//let rowSize = 8;
let colSize = 16;
let gridSize = colSize * colSize;
gridNode.style.gridTemplateColumns = `repeat(${colSize}, 1fr)`;

let boxs = [];
for(let i = 0; i < gridSize; i++){
 boxs[i] = document.createElement("div");
 boxs[i].dataset.pos = i.toString();
 boxs[i].classList.add("box");
 

 //boxs[i].textContent = "O";
 gridNode.appendChild(boxs[i]);
}
