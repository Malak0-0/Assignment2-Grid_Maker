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
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}