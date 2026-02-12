// Create a 16x16 grid of square divs
const container = document.querySelector("#container");
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) { 
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black';
    });
    container.appendChild(square);

}