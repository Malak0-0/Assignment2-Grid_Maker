// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = "WHITE";
let grid = document.getElementById("grid");

// Add a row
function addR() {
    let addRow = grid.insertRow();
    numRows++;

    if (numRows === 1 && numCols === 0) {
        numCols = 1;
    }
    
    // add cells to the new row

    for (let i = 0; i < numCols; i++) {
        let newCell = addRow.insertCell();
        newCell.addEventListener("click", fillCell, false);
    }
}

// Remove a row
function removeR() {
    if (numRows === 0) {
        return;
    }
    numRows--;
    grid.deleteRow(-1);
    if (numRows === 0) {
        numCols = 0;
    }

}

// Add a column
function addC() {
// add a new row and a cell if theres no rows
if (numRows === 0) {
    addR();
    return;
}
numCols++;
for (let i = 0; i < numRows; i++) {
    let row = grid.rows[i]; 
    let newCell = row.insertCell(); // add a new cell
    newCell.addEventListener("click", fillCell, false);
}

}


// Remove a column
function removeC() {
    if (numCols === 0) {
        return; // No columns to remove
    }

    numCols--;

    // Delete the last cell from each row
    for (let i = 0; i < grid.rows.length; i++) {
        if (grid.rows[i].cells.length > 0) {
            grid.rows[i].deleteCell(-1);
        }
    }
}

// Function to handle cell color filling
function fillCell(event) {
    if (colorSelected) { 
        event.target.style.backgroundColor = colorSelected;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}


// Fill all uncolored cells
function fillU(){
    for (let i = 0; i < grid.rows.length; i++) {
        for (let j = 0; j < grid.rows[i].cells.length; j++) {
            let cell = grid.rows[i].cells[j];

            // only fill cells that have no color or are white
            if (!cell.style.backgroundColor || cell.style.backgroundColor === "white") { 
                cell.style.backgroundColor = colorSelected; // apply the color selected by user
            }
        }
    }
}

// Fill all cells
function fillAll(){
    for (let i = 0; i < grid.rows.length; i++) { // loop through each row
        for (let j = 0; j < grid.rows[i].cells.length; j++) { // loops through each cell in a row
            let cell = grid.rows[i].cells[j];
            cell.style.backgroundColor = colorSelected; // changes the color of every cell
        }
    }
}

// Clear all cells
function clearAll(){
    for (let i = 0; i < grid.rows.length; i++) { // loops  each row
        for (let j = 0; j < grid.rows[i].cells.length; j++) { // loop through each cell in each row
            let cell = grid.rows[i].cells[j];
            cell.style.backgroundColor = "white"; // reset the color to white
        }
    }

}