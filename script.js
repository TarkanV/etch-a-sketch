const gridNode = document.querySelector(".grid-container");
const body = document.querySelector("body");
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
let isDown = null;

body.addEventListener("mouseover", (e) => {
    e.stopPropagation();   
   if(!e.target.classList.contains("box")) isDown = false;
});

    boxs.forEach(box => {
        
        //box.setAttribute('draggable', false);
        
        //#1 Have to change background-color value to a variable

        //Colors whe
        box.addEventListener("mousedown", () => {
            box.style.backgroundColor = "black"; 
            isDown = true;
            console.log("isDown");
        });

        //Adds hover effect to box the cursor is on and colors it if mousedown
        box.addEventListener("mousemove", (e) => {
            box.classList.toggle("hover",true);
            if(isDown) box.style.backgroundColor = "black";
        });

        //Remove hover effect from boxes the cursor left 
        box.addEventListener("mouseout", ()=> {box.classList.toggle("hover", false);
        }); 

        //Cancels hover and mousedown coloring
        box.addEventListener("mouseup", () => {
            isDown = false;
        });
        
    });
