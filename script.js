function drawGrid() {
    for(let i = 0; i < 16; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        document.querySelector(".containerGrid").appendChild(rows);
        for(let j = 0; j < 16; j++) {
            const columns = document.createElement('div');
            columns.classList.add('columns');
            rows.appendChild(columns);
        }
}
}
