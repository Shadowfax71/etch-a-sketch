// Create a 16x16 grid of square divs
const container = document.querySelector("container");

for (let i = 0; i < 256; i++) { //256 because it's 16*16
    const square = document.createElement('div');
    container.appendChild(square);
}