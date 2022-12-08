/*-------------------------------- Constants --------------------------------*/

const squareEls = document.getElementsByClassName("sqr")
// console.log(squareEls);
const messageEl = document.getElementById("message")
// console.log(messageEl);

/*---------------------------- Variables (state) ----------------------------*/

let board = {
    sq0: null,
    sq1: null,
    sq2: null,
    sq3: null,
    sq4: null,
    sq5: null,
    sq6: null,
    sq7: null,
    sq8: null
}
// console.log(board);
 let turn = 1
//  console.log(turn);
 let winner = false
//  console.log(winner);
 let tie = false
//  console.log(tie);

/*------------------------ Cached Element References ------------------------*/

document.getElementsByClassName("sqr")
document.getElementById("message")

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
    // console.log(" the start");
    render()
}
init()
