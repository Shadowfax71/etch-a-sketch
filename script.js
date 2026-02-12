// Create a 16x16 grid of square divs
const container = document.querySelector("#container");
const button = document.querySelector("#resizeBtn");

createGrid(16); //creates a 16x16 grid by default

button.addEventListener('click', function() {
    const userInput =parseInt(
        prompt("Please enter a number of squares per side (max 100"),
        10
    ); //converts input into an integer

    if (userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else {
        alert("Please enter a valid number (1 to 100)")
    }
});

// const gridSize = 16; don't think i need this

function createGrid(size) {

    // Remove existing squares safely
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = (100 / size) + "%";
        square.style.height = (100 / size) + "%";

        square.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}