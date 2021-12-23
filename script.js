function createGrid(sides){
    for(let x = 0; x < sides*sides; x++){
        let x = document.createElement("div");
        x.classList.add("cell");
        x.setAttribute("style",`width: ${450/sides}px; height: ${450/sides}px;`);
        x.addEventListener('mouseover', () => mouseOver(x));
        container.appendChild(x);
    }
}

function mouseOver(x){
    if(rainbow.disabled == true){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255); 
        x.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
    } else {
        const a = Math.random();
        x.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
    }
}

function wipeout(){
    while(container.firstChild) container.removeChild(container.firstChild);
    createGrid(sides);
    let cells = document.querySelectorAll(".cell");
}


//Initial values
const container  = document.querySelector(".container");
const clear      = document.querySelector(".clear");
const newGrid    = document.querySelector(".new");
const rainbow    = document.querySelector(".rainbow");
const grayscale  = document.querySelector(".grayscale");
let sides        = 16;
rainbow.disabled = true;

//Create initial 16x16 grid
createGrid(sides);
let cells = document.querySelectorAll(".cell");

//Clear button
clear.addEventListener("click", () => wipeout());

//New Grid button
newGrid.addEventListener("click", () => {
    do{
        sides = prompt("What would be the side of the grid? (Note: Only accepts a number from 1 to 50)");
    } while (sides > 50 || sides < 1)
    wipeout();
})

//Rainbow button
rainbow.addEventListener("click", () => {
    rainbow.disabled = true;
    grayscale.disabled = false;
});

//Grayscale button
grayscale.addEventListener("click", () => {
    rainbow.disabled = false;
    grayscale.disabled = true;
});