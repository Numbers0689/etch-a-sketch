const input = document.querySelector(".size")
const container = document.querySelector('div');

for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
        const element = document.createElement('div');
        element.classList.add("grid");
        container.appendChild(element);
    }
}


input.addEventListener('click', () => {
    let sq = prompt("Enter Grid Size (16 - 128): ");
    if(sq < 16){
        sq = 16;
    }
    else if(sq > 128){
        sq = 128;
    }

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild)
    }
    for (let i = 0; i < sq; i++) {
        for (let j = 0; j < sq; j++) {
            const element = document.createElement('div');
            element.classList.add("grid");
            container.appendChild(element);
        }
    }

});
