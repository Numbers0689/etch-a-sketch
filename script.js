const input = document.querySelector("#rangeSize")

input.addEventListener('change', () => {
    let sq = input.value;
    const container = document.querySelector('div');
    for (let i = 0; i < sq; i++) {
        for (let j = 0; j < sq; j++) {
            const element = document.createElement('div');
            element.classList.add("grid");
            container.appendChild(element);
        }
    }
});



console.log(input.value)
