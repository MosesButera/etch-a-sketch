let container = document.querySelector(".container");
const gridDivSize = 16;

function createContainerDivs () {
    for (let i = 0; i < gridDivSize * gridDivSize; i++){
        const gridDivItem = document.createElement("div");
        gridDivItem.classList.add("dynamic-div-item");
        gridDivItem.textContent = i + 1;
        container.appendChild(gridDivItem);
    }
}

createContainerDivs();