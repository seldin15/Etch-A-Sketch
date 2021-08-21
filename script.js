window.onload(drawGrid(32));
const button = document.getElementById('play');

button.addEventListener("click", () => {
    resetGrid();
});

function drawGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        document.querySelector(".containerGrid").appendChild(rows);
        for(let j = 0; j < gridSize; j++) {
            const columns = document.createElement('div');
            columns.classList.add('columns');
            rows.appendChild(columns);
            columns.addEventListener("mouseenter", function(event) {
                event.target.style.backgroundColor = "yellow";
            });
        }
}
}

function resetGrid() {
    let gridSize = prompt("Type in grid size (Max 100)", "");
    removeGrid();
    drawGrid(gridSize);
}