// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = "SELECT";
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
// add a new row and a cell if thers no rows
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
        numRows = 0;
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }
        return;
    }
    numCols--;
    // delete last cell from each row
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
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