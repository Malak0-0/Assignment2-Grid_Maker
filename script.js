// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = "SELECT";


// Add a row
function addR() {

    const grid = document.getElementById("grid");
    const newRow = document.createElement("tr"); // new row at end of table

    if (numCols === 0) {
        numCols = 1; 
    }

    // add cells to the new row
    for (let i = 0; i < numCols; i++) {
        const newCell = document.createElement("td");
        newCell.onclick = function() { selectCell(this); }; // Click to change color
        newRow.appendChild(newCell);
    }

    grid.appendChild(newRow); // Add new row to the table
    numRows++; // Update row count

}

// Remove a row
function removeR() {
    const grid = document.getElementById("grid");
    if (numRows > 0) {
        grid.deleteRow(-1); // remove the last row
        numRows--;
        if (numRows === 0) numCols = 0; // col count is 0 if all are removed
    }
}





// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}


// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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