//Create the 16*16 grid dynamically

let container = document.querySelector(".container");
const gridDivSize = 16;

function createContainerDivs () {
    for (let i = 0; i < gridDivSize * gridDivSize; i++){
        const gridDivItem = document.createElement("div");
        gridDivItem.classList.add("dynamic-div-item");
        // gridDivItem.textContent = i + 1;
        container.appendChild(gridDivItem);
    }
}

createContainerDivs();

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
    const rndCols = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCols;
    console.log(e);
  }

function hover(){
    const createdDynamicDiv = document.querySelectorAll(".dynamic-div-item");
    createdDynamicDiv.forEach(element => {
        element.addEventListener("mouseover", bgChange);
    });
}

hover();

