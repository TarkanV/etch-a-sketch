//#1 Have to change background-color value to a variable

const gridNode = document.querySelector(".grid-container");
const body = document.querySelector("body");
const reset = document.querySelector(".reset");

let boxs = null;
//let rowSize = 8;
let colSize = 16;
reset.addEventListener("click", () => initializeGrid(colSize));

function initializeGrid(colSize){
    console.log("this is called");

    if (boxs != null){
        boxs.forEach(box =>{
            gridNode.removeChild(box);
            
        });     
    }
    
    boxs = [];
    let gridSize = colSize * colSize;
    gridNode.style.gridTemplateColumns = `repeat(${colSize}, 1fr)`;
    
    for(let i = 0; i < gridSize; i++){
        boxs[i] = document.createElement("div");
        boxs[i].dataset.pos = i.toString();
        boxs[i].classList.add("box");
        gridNode.appendChild(boxs[i]);
        //boxs[i].textContent = "O";
}
    
    addColoringEvents();

}


function addColoringEvents(){
    let isDown = null;

    
    
    

    /*
    gridNode.addEventListener("mouseup", () => {
        isDown = false;
    });
    gridNode.addEventListener("mousedown", () => { 
        isDown = true;
    });
    gridNode.addEventListener("mouseleave", (e) => {
        isDown = false;
    });
    */



    boxs.forEach(box => {     
        //Colors when left mouse button is clicked
        box.addEventListener("mousedown", () => {
            box.style.backgroundColor = "black"; 
        });

        //Adds hover effect to box the cursor is on and colors it if mousedown
        box.addEventListener("mouseover", (e) => {
            box.classList.toggle("hover",true);
            if(e.buttons > 0) box.style.backgroundColor = "black";
        });
       
        //Remove hover effect from boxes the cursor left 
        box.addEventListener("mouseout", ()=> {
            box.classList.toggle("hover", false);
        }); 

        //Cancels hover and mousedown coloring
     
        
    });
}

initializeGrid(colSize);





