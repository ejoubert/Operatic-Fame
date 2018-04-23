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
	let x = light.substring(0); //Seperates number from entry string
	let y = light.substring(1); //Seperates letter from entry string
	let letterCell = x.charCodeAt() - 65; //Converts letter into corresponding number in grid
	return GRID[letterCell][y-1];
}

//Determines whether there is a rock at a specific coordinate. Returns true|false
function isRock(rock){
  let x = rock.substring(0); //Seperates number from entry string
  let y = rock.substring(1); //Seperates letter from entry string
  letterCell = x.charCodeAt() - 65; //Converts letter into corresponding number in grid
  
  //Determines whether selected cell is occupied with a rock
  if (GRID[letterCell][y-1] ==="^") {
    return true;
  }else{
    return false;
    }
}

//Determines whether there is a strong current at a specific coordinate. Returns true\false
function isCurrent(current){
  let x = current.substring(0); //Seperates number from entry string
  let y = current.substring(1); //Seperates letter from entry string
  let letterCell = x.charCodeAt() - 65; //Converts letter into corresponding number in grid
  
  //Determines whether selected cell is occupied with strong current
  if (GRID[letterCell][y-1] ==="~") {
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
  let letterCell = (column.charCodeAt() - 65); //Converts letter to corresponding number in grid
  for (var i = 0; i < GRID[letterCell].length; i++) {
    
    //Pushes i's value of grid to new array on each row pass
    array.push(GRID[i][letterCell])
  }
  return array
}

//Specifies grid cells passed to other functions
let chosenCell = "B5";
let rockCheck = "A4";
let currentCheck = "E2"
let rowLight = 9
let columnLight = "E"

 
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
