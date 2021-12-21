//create 16x16 grid
const container = document.querySelector(".container");
for(let x = 0; x<16*16; x++){
    const x = document.createElement("div");
    x.textContent = "A";
    container.appendChild(x);
}

