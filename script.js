const input = document.querySelector(".size")
const container = document.querySelector('div');

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
}

gridMakes(32);

input.addEventListener('click', () => {
    let sq = prompt("Enter Grid Size (16 - 128): ");
    if(sq < 16){
        sq = 16;
    }
    else if(sq > 64){
        sq = 64;
    }

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild)
    }
    gridMakes(sq);

    const gridDiv = document.querySelectorAll('.grid');

    gridDiv.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.classList.add('colored');
        });
    });

});

const gridDiv = document.querySelectorAll('.grid');

gridDiv.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        grid.classList.add('colored');
    });
});