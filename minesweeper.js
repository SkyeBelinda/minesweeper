document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [ //square brances means its an array
    {//1 curly braces is an object
      row: 0, //this whole line is a property - objects have property
      col: 0,
      isMine:false,
      hidden:true
    },
    {//2
      row: 0,
      col: 1,
      isMine:false,
      hidden:true
    },
    {//3
      row:0,
      col: 2,
      isMine:false,
      hidden:true
    },

      {//4
        row: 1,
        col: 0,
        isMine:false,
        hidden:true

        },
      {//5
      row: 1,
      col: 1,
      isMine:false,
      hidden:true
    },
    {//6
      row: 1,
      col: 2,
      isMine:false,
      hidden:true
    },
    {//7
    row: 2,
    col: 0,
    isMine:false,
    hidden:true
  },
   {//8
   row: 2,
   col: 1,
   isMine:true,
   hidden:true
  },
    {//9
      row: 2,
      col: 2,
      isMine:false,
      hidden:true
    },
]
  }



function startGame () {
  // Don't remove this function call: it makes the game work!

document.addEventListener('contextmenu', checkForWin)
document.addEventListener('click', checkForWin)

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines =
    countSurroundingMines(board.cells[i])

    // This block will be executed 100 times
    console.log('Currently at ' + i);


    // Note: the last log will be "Currently at 99"
}
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  for (var i = 0; i < board.cells.length; i++) {
    if  ((board.cells[i].isMine && board.cells[i].isMarked) || (!board.cells[i].isMine && !board.cells[i].hidden)) {
     lib.displayMessage('You win!')
   }
   else {
     return
   }
 }

}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    //  lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = getSurroundingCells(cell.row, cell.col)
  var mineCount = 0
  for (var i = 0; i < surroundingCells.length; i++)
  {
    if (surroundingCells[i].isMine){mineCount++}
  }
  return mineCount
  }
