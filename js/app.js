/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.getElementById('message')

const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 4, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6]]

const resetBtnEl = document.getElementById('reset-button')

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/

document.getElementById('the-reset')
document.getElementById('message')
document.querySelectorAll('.sqr')
document.querySelector('.board')

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)
document.getElementById('the-reset').addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    render()
}
init()

function render() {
    updateBoard()
    updateMessage()
} 

function updateBoard() {
    board.forEach(function(squ, idx) {
        if (squ === 1) {
           return squareEls[idx].innerHTML = "X"
        }else if(squ === -1) {
            return squareEls[idx].innerHTML = "O"
        } else {
            return squareEls[idx].innerHTML = ""
        }
    })
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `Player ${turn === 1? 'X' : 'O'} turn`
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!"
    } else {
        messageEl.textContent = `Player ${turn === -1? 'O' : 'X'} wins!`
    }
}

function handleClick(evt) {
   const sqIdx = parseInt(evt.target.id.slice(2, 3), 10);
//    console.log(sqIdx);
    if (winner === true) {
        return 
    }
        placePiece(sqIdx)
        checkForWinner()
        checkForTie()
        switchPlayerTurn()
        render()
    }
    
//board array index should update as turns value switches
//board = [null, null, null, null, null, null, null, null, null]
//turn = 1
// board[idx] = this.turn

function placePiece(idx) {
  board[idx] = turn 
  console.log(board);
}

function checkForTie() {
    board.forEach(function(tile) {
        if (tile === null) {
            tie = false
        }else {
            tie = true
        }
    })
}

// loop through winningCombos array
// total up the 3 board positions using the 3 numbers in that winning combo
// take that # and convert into an absolute value
// if the total is = 3 set winner = true
function checkForWinner() {
    winningCombos.forEach(function(combo) {
        let theWinner = 0
        combo.forEach(function(element) {
            theWinner += board[element]
        })
        console.log('check winner', theWinner);
        if (Math.abs(theWinner) === 3) {
            winner = true
        }
    })
}

function switchPlayerTurn() {
    if (winner === true) {
        return
    }else {
        turn = turn * -1
    }
}











