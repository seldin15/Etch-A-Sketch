
const button = document.getElementById('play');



button.addEventListener("click", () => {
    resetGrid();
});

function drawGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        document.querySelector(".containerGrid").appendChild(rows);
        let rowHeight = document.querySelector('.containerGrid').offsetHeight;
        rowHeight = rowHeight / gridSize;
        let allRows = document.querySelectorAll('.rows');
        allRows.forEach(rows => {
            rows.style.height = rowHeight + "px";
        });
        for(let j = 0; j < gridSize; j++) {
            const columns = document.createElement('div');
            columns.classList.add('columns');
            rows.appendChild(columns);
            columns.addEventListener("mouseenter", function(event) {
                event.target.style.backgroundColor = "yellow";
            });
            
            let colHeight = document.querySelector('.containerGrid').offsetHeight;
            let colWidth = document.querySelector('.containerGrid').offsetWidth;
            colHeight = colHeight / gridSize;
            colWidth = colWidth / gridSize;
            let allColHW = document.querySelectorAll('.columns');
            allColHW.forEach(cols => {
                cols.style.height = colHeight + "px";
                cols.style.width = colWidth + "px";
            })
        }
}
}

function resetGrid() {
    let gridSize = prompt("Type in grid size (Max 100)", "");
    drawGrid(gridSize);
}
