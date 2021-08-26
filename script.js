
const button = document.getElementById('play');
const randomBtn = document.getElementById('rgb');
const containerGrid = document.querySelector('.containerGrid');
const normalButton = document.getElementById('normal');

randomBtn.addEventListener("click", function() {
    let grid = document.getElementsByClassName('columns');
    for(let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = getRandomColor();
        });
    }
});
normalButton.addEventListener("click", function() {
    let grid = document.getElementsByClassName('columns');
    for(let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "#7A28CB";
        });
    }
});
button.addEventListener("click", () => {
    resetGrid();
});

function drawGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        containerGrid.appendChild(rows);

        let rowHeight = containerGrid.offsetHeight;
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
                event.target.style.backgroundColor = "#7A28CB";
            });

            let colHeight = containerGrid.offsetHeight;
            let colWidth = containerGrid.offsetWidth;
            colHeight = colHeight / gridSize;
            colWidth = colWidth / gridSize;

            let allColHW = document.querySelectorAll('.columns');
            allColHW.forEach(cols => {
                cols.style.height = colHeight + "px";
                cols.style.width = colWidth + "px";
            });
        }
}
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random()* 15)];
    }
    return color;
}

function removeGrid() {
    let allRows = document.querySelectorAll('.rows');
    allRows.forEach(row => {
        containerGrid.removeChild(row);
    });
}

function resetGrid() {
    let gridSize = prompt("Type in grid size (Max 48)", "");
    
    if(gridSize > 48) {
        alert("Insert a number below 48!");
    }
    else {
    removeGrid();
    drawGrid(gridSize);
}
}
