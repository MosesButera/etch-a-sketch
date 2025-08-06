//Create the 16*16 grid dynamically

let container = document.querySelector(".container");
const gridDivSize = 16;

function createContainerDivs (gridDivSize) {
    for (let i = 0; i < gridDivSize * gridDivSize; i++){
        const gridDivItem = document.createElement("div");
        gridDivItem.classList.add("dynamic-div-item");
        gridDivItem.style.width = `${100 / gridDivSize}%`;
        gridDivItem.style.height= `${100 / gridDivSize}%`;
        gridDivItem.style.border = "1px solid lightgrey";
        gridDivItem.style.display = "flex";
        gridDivItem.style.justifyContent = "center";
        gridDivItem.style.alignItems = "center";
        gridDivItem.style.fontSize = "1.2em";
        container.appendChild(gridDivItem);
    }
}

createContainerDivs(gridDivSize);

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

function removeAllElementChildren(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    };
}

const createNewGridButton = document.querySelector("button");

function userInputDynamicGrid(){
    
    const userGridSizes = prompt("Please enter grid square dimensions i.e. Whole number greater than 0 and less than 100 e.g 16");
    userGrid = Math.floor(userGridSizes);

    if (userGrid > 100){
        alert("Please enter grid size less or equal to 100");
    } else if(userGrid === null){
        alert("User cancelled!");
    }

    removeAllElementChildren();
    createContainerDivs (userGrid);
    hover ();
}


createNewGridButton.addEventListener("click", userInputDynamicGrid);

const clearGridButton = document.querySelector(".Clear");

function clrHover(){
    const allCreatedDivs = document.querySelectorAll(".dynamic-div-item");
    allCreatedDivs.forEach(element => {
        element.style.backgroundColor = "";
    });
}

clearGridButton.addEventListener("click", clrHover);
