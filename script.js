let sq = 16;

const container = document.querySelector('div');
for (let i = 0; i < sq; i++) {
    for (let j = 0; j < sq; j++) {
        const element = document.createElement('div');
        element.classList.add("grid");
        container.appendChild(element);
    }
}