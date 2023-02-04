//#1 Have to change background-color value to a variable

const gridNode = document.querySelector(".grid-container");
const body = document.querySelector("body");
const reset = document.querySelector(".reset");
const color = document.querySelector(".color");

const resize = document.querySelector(".resize");
const slider = document.querySelector(".size-slider");
const sliderValue = document.querySelector(".slider-value");

const rainbow = document.querySelector(".rainbow");
let switchRainbow = false;
const gradient = document.querySelector(".gradient");
let switchGradient = false;
let gradientStep = 10;

let boxs = null;
//let rowSize = 8;
let colSize = 16;
let colorValue = "black";
let savedColor = "black";


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
        
        resize.classList.toggle("active");
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

function enableRainbow(){
    rainbow.addEventListener("click", () => {
        rainbow.classList.toggle("active");
        
        switchRainbow = !switchRainbow ? true : false;
        if(switchGradient) {
            switchGradient = false;
            gradient.classList.toggle("active");
            calculateRainbow();
        }
        else if(!switchRainbow) {color.disabled = false; colorValue = savedColor;}
        else {color.disabled = true; savedColor = colorValue; calculateRainbow(); };
    });
    gridNode.addEventListener("mouseover", (e) =>{
        if(e.buttons > 0) calculateRainbow(); 
    });
    gridNode.addEventListener("mousedown", () =>{
        calculateRainbow();
    });
}
function calculateRainbow(){
    if(switchRainbow){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random( ) * 256);
        colorValue = `rgb(${r},${g},${b})`;
        console.log(colorValue);
    }
}

function enableGradient(){
    gradient.addEventListener("click", () => {
        gradient.classList.toggle("active");
        

        switchGradient = !switchGradient ? true : false;
        if(switchRainbow) {switchRainbow = false; rainbow.classList.toggle("active");}
        else if(!switchGradient) {color.disabled = false; colorValue = savedColor;}
        else {color.disabled = true; savedColor = colorValue; calculateGradient(); 
        };
    });
    gridNode.addEventListener("mouseup", () => {gradientStep = 10;
        console.log("debut gradient");
    });
    gridNode.addEventListener("mousedown", () =>{
        
        calculateGradient();
    });
    gridNode.addEventListener("mouseover", (e) =>{
        if(e.buttons > 0){
            calculateGradient();
        }
        else{

            gradientStep = 9;
            if(switchGradient) colorValue = "white";
        }
        

           
    });

}
function calculateGradient(){
    if(switchGradient){
        if(gradientStep >= 1){
            colorValue = (`hsl(0deg, 0%, ${10 * gradientStep}%)`);
            --gradientStep;
        }
    }
}

initializeGrid(colSize);
changeColor();
enableGridResizing(resize,slider);
resizeGrid(slider);
enableRainbow();
enableGradient();




