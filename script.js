//#1 Have to change background-color value to a variable

const gridNode = document.querySelector(".grid-container");
const body = document.querySelector("body");
const reset = document.querySelector(".reset");
const color = document.querySelector(".color");

const resize = document.querySelector(".resize");
const slider = document.querySelector(".size-slider");
const sliderValue = document.querySelector(".slider-value");

let boxs = null;
//let rowSize = 8;
let colSize = 16;
let colorValue = "black";
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

function changeColor(){
    color.addEventListener("change", () => {
        colorValue = color.value;
      
    });
}

function addColoringEvents(){
    let isDown = null;

    boxs.forEach(box => {     
        //Colors when left mouse button is clicked
        box.addEventListener("mousedown", () => {
            box.style.backgroundColor = colorValue; 
        });
        //Adds hover effect to box the cursor is on and colors it if mousedown
        box.addEventListener("mouseover", (e) => {
            box.classList.toggle("hover",true);
            if(e.buttons > 0) box.style.backgroundColor = colorValue;
        });    
        //Remove hover effect from boxes the cursor left 
        box.addEventListener("mouseout", ()=> {
            box.classList.toggle("hover", false);
        });   
        
    });
}

function enableGridResizing(resize, slider){
    resize.addEventListener("click", () => {
        
        let isDisabled = slider.disabled;
        console.log(isDisabled);
        slider.disabled = (!isDisabled ? true : false); 
    });
}
function resizeGrid(slider){
    slider.addEventListener("input", () => sliderValue.textContent = "Size : " + slider.value);
    slider.addEventListener("change", () =>{
        colSize = slider.value;
        console.log(colSize);
        
       initializeGrid(colSize); 
    })
}


initializeGrid(colSize);
changeColor();
enableGridResizing(resize,slider);
resizeGrid(slider);





