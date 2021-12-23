

/*

//create 16x16 grid
const container = document.querySelector(".container");
for(let x = 0; x < 16*16; x++){
    const x = document.createElement("div");
    x.classList.add("cell");
    x.textContent = "A";
    container.appendChild(x);
}


let selection = 0;




//button press
const button = document.querySelector("button");
button.addEventListener("click", () => {

    selection = prompt("side of square?");

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let x = 0; x < selection*selection; x++){
        const x = document.createElement("div");
        x.classList.add("cell");
        x.textContent = "A";
        container.appendChild(x);
    }
    
//mouseover color changing
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => cell.setAttribute("style","background-color: blue"));
});


});



//mouseover color changing
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => cell.setAttribute("style","background-color: blue"));
});


//random color tools
//opacity tools

*/