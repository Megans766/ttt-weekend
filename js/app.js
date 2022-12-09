/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll("div")
// console.log(squareEls);
const messageEl = document.getElementById("message")
// console.log(messageEl);
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner,tie


/*------------------------ Cached Element References ------------------------*/

document.querySelectorAll("div")
document.getElementById("message")

/*----------------------------- Event Listeners -----------------------------*/



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

}





