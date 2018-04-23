 //Creates grid
 const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "", "", "~", "", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
      ];

//Determines grid size
function gridSize(){
  return `${GRID[0].length} x ${GRID.length}`;
}

//Determines area of grid
function totalCells(){
  return GRID[0].length * GRID.length;
}

//Determines a cell's content at a specific coordinate
function lightCell(light){
  return GRID[convertLetter(light)][convertNumber(light)];
}

//Determines whether there is a rock at a specific coordinate. Returns true|false
function isRock(rock){
  
  //Determines whether selected cell is occupied with a rock
  if (GRID[convertLetter(rock)][convertNumber(rock)] ==="^") {
    return true;
  }else{
    return false;
    }
}

//Determines whether there is a strong current at a specific coordinate. Returns true\false
function isCurrent(current){
    
  //Determines whether selected cell is occupied with strong current
  if (GRID[convertLetter(current)][convertNumber(current)] ==="~") {
    return true;
  }else{
    return false;
  }
}

//Returns contents of chosen row
function lightRow(row){
  return GRID[row];
}

//Returns contents of chosen column
function lightColumn(column){
  let array = []
  for (var i = 0; i < GRID[convertLetter(column)].length; i++) {
    
    //Pushes i's value of grid to new array on each row pass
    array.push(GRID[i][convertLetter(column)-2])
  }
  return array
}

function convertLetter(input){
  let letter = input.substring(0);
  let letterConvert = (letter.charCodeAt() - 65) + 1;
  return letterConvert + 1
}
function convertNumber(input){
  let numberConvert = input.substring(1);
  return numberConvert
}

//Specifies grid cells passed to other functions
let chosenCell = "B5";
let rockCheck = "A4";
let currentCheck = "E2"
let rowLight = 9
let columnLight = "E"

 console.log(convertLetter('D1'))
//Logs grid size, area, and contents of a specific cell 
console.log(`The grid is ${gridSize()} with a total of ${totalCells()} cells. The current cell contains "${lightCell(chosenCell)}"`)

//Logs whether or not there is a rock in rockCheck coordinate
console.log('There is a rock here: ' + isRock(rockCheck))

//Logs whether or not there is a strong current in currentCheck coordinate
console.log('There is a strong current here: ' + isCurrent(currentCheck))

//Logs the entire row selected by rowLight
console.log(`The row you selected contains: ${lightRow(rowLight-1)}`)

//Logs the entire column selected by columnLight
console.log(`The column you selected contains: ${lightColumn(columnLight)}`)
