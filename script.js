const input = document.querySelector(".size");
const container = document.querySelector('div');
const clear = document.querySelector('.clear');
const color = document.querySelector('.color');
let gridColor = "black";

let sq = 32;
gridMakes(sq);
hoverColor();

function gridMakes(sq) {
    for (let i = 0; i < sq; i++) {
        const bigElement = document.createElement('div');
        for (let j = 0; j < sq; j++) {
            const element = document.createElement('div');
            element.classList.add("grid");
            bigElement.appendChild(element);
        }
        bigElement.classList.add("containerTwo");
        container.appendChild(bigElement);
    }
};

function createColor() {
    const hex = "0123456789ABCDEF";
    let randomColor = '#';
    for(let i = 0; i < 6; i++) {
        randomColor += hex[Math.floor(Math.random() * 16)];
    }
    return randomColor;
};

function clearGrid() {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild)
    }
};

function hoverColor() {
    const gridDiv = document.querySelectorAll('.grid');
    gridDiv.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.setAttribute('style', `background-color: ${gridColor};`);
        });
    });
};

input.addEventListener('click', () => {
    sq = prompt("Enter Grid Size (16 - 128): ");
    if(sq < 16){
        sq = 16;
    }
    else if(sq > 64){
        sq = 64;
    }
    clearGrid();
    gridMakes(sq);
    hoverColor();
});

clear.addEventListener('click', () => {
    clearGrid();
    gridMakes(sq);
    hoverColor();
});

let isActive = false;
color.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive){
        gridColor = createColor();
    }
    else{
        gridColor = "black";
    }
})