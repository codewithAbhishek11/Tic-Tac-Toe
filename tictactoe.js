let gameActive =true;
let currentPlayer ="X";
let gameState = ["","","","","","","","","",];
statusDisplay = document.querySelector(".game_status");

function handlebutton(){
    gameActive =true;
    gameState = ["","","","","","","","","",];
    currentPlayer ="X";
    document.querySelectorAll(".cell").forEach(cell=>cell.innerHTML="");
    statusDisplay.innerHTML = "It's Player1's turn"
}

function handleCellClick(event){
    let clickedCell = event.target;
    
    let clickedCellIndex = clickedCell.getAttribute("data-cell-index");
    if(gameState[clickedCellIndex] !=="" || gameActive === false){
        return;
    }
    handleCellPlayer(clickedCell,clickedCellIndex);
    winnerDisplay()
}

let winCondition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function winnerDisplay() {
    let roundWon = false;
    for(let i=0;i<=7 ;i++){
        let winCond =  winCondition[i];
        let  a = gameState[winCond[0]];
        let  b = gameState[winCond[1]];
        let  c = gameState[winCond[2]];

        if(a === "" || b === "" || c ===""){
            continue;
        }
            if(a===b && b===c){
                roundWon = true;
                break;
            }
    }
    if(roundWon){
        if(currentPlayer === "X")
        statusDisplay.innerHTML = `Congratulations! Player1 wins`;
        else
        statusDisplay.innerHTML = `Congratulations! Player2 wins`;
        gameActive =false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if(roundDraw){
        statusDisplay.innerHTML = "Draw!";
        gameActive =false;
        return;
    }
    handlePlayerChange();
    
}

function handlePlayerChange(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if(currentPlayer === "X")
    statusDisplay.innerHTML =  `It's Player1's turn`;
    else
    statusDisplay.innerHTML =  `It's Player2's turn`;
}

function handleCellPlayer(clickedCell,clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

document.querySelector(".game_restart").addEventListener("click",handlebutton);
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click",handleCellClick));
