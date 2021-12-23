function createGrid(sides){
    for(let x = 0; x < sides*sides; x++){
        const x = document.createElement("div");
        x.classList.add("cell");
        x.setAttribute("style",`width: ${450/sides}px; height: ${450/sides}px;`);
        container.appendChild(x);
    }
}

function mouseOver(color){
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => cell.style.backgroundColor = color);
    });
}

//Initial values
let sides = 16;
let color = "blue";

//Create initial 16x16 grid
const container = document.querySelector(".container");
createGrid(sides);
let cells = document.querySelectorAll(".cell");
mouseOver(color);


//Clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    cells.forEach((cell) => { 
        cell.style.backgroundColor = "white";
    });
});

//New Grid button
const newGrid = document.querySelector(".new");
newGrid.addEventListener("click", () => {
    do{
        sides = prompt("What would be the side of the grid? (Note: Only accepts a number from 1 to 50)");
    } while (sides > 50 || sides < 1)
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(sides);
    cells = document.querySelectorAll(".cell");
    mouseOver(color);
})