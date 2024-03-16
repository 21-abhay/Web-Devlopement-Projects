
const parts = document.querySelectorAll('.parts');
const result1 = document.getElementById('result-1');
const result2 = document.getElementById('result-2');
const total = document.getElementById('result-total');
const outcome = document.getElementById('outcome');
const restart = document.getElementById('restart');

var player1 = 'X';
var player2 = 'O';
var currentPlayer=player1;

function start(event){
    const part = event.target;
    if(part.textContent==''){
        part.textContent = currentPlayer;
        if(checkWin()){
            console.log(currentPlayer," won the game..");
            outcome.style.display = 'block'
            outcome.style.animation = 'show 2s 1';
            setInterval(() => {
                outcome.style.display = 'none';
            }, 1500);
            givePoints();
        }
        changeTurn();
    }
}

function changeTurn(){
    if(currentPlayer===player1){
        currentPlayer = player2;
        outcome.textContent = 'Player-1';
    }
    else{
        currentPlayer = player1;
        outcome.textContent = 'Player-2';
    }
}

function checkWin(){
    let condition = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],]

    for (let i = 0; i < condition.length; i++) {
        let [p1,p2,p3] = condition[i];
        if(parts[p1].textContent!='' && 
        parts[p1].textContent==parts[p2].textContent &&
        parts[p2].textContent==parts[p3].textContent){
            return true;
        }
    }
    return false;
}

function givePoints(){
    if(currentPlayer == player1){
        result1.textContent = 1 + parseInt(result1.textContent);
    }
    else{
        result2.textContent = 1 + parseInt(result2.textContent);
    }
    clear();
}
const clear = ()=>{
    for (let i = 0; i < parts.length; i++) {
        parts[i].textContent = ''
    }
    total.textContent = 1 + parseInt(total.textContent);
}
restart.addEventListener('click',clear)