// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');

let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
console.log(btns);

console.log(document.getElementById("result"));
function resetGame(f) {
    if(f==1) {
        for(let i = 0; i<9; i++) {
            if(cells[i] == ''){
                cells[i] = "t";
                let e = "btn"+(i+1);
                document.getElementById(e).classList.add("btndis");
            }
        }
    } else {
        cells = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = "X"
        document.getElementById("result").innerText = "Player X turn";
        for(let i = 0; i<9; i++) {
            let e = "btn"+(i+1);
            document.getElementById(e).value = "";
            document.getElementById(e).classList.remove("btndis");
        }
    }
};

function changecurrentPlayer() {
    if(currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    
    document.getElementById("result").innerText = "Player " + currentPlayer + " turn";
}

function ticTacToe(element, index) {
    for (const cond of conditions) {
        const [a, b, c] = cond;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            if(cells[a] == "X" || cells[a] == "O"){
                changecurrentPlayer();
                document.getElementById("result").innerText = "Player " + currentPlayer + " wins!";
                console.log(cells[a]);
                resetGame(1);
            }
        }
    }
};



const ticTac = () => {
    console.log("Hello");
};


function btn(cellsnumber) {
    if(cells[cellsnumber] == '') {
        cells[cellsnumber] = currentPlayer;
        e = "btn" + (cellsnumber+1);
        document.getElementById(e).value = currentPlayer;
        document.getElementById(e).classList.add("btndis");
        changecurrentPlayer();
        ticTacToe(currentPlayer, cellsnumber);
    }
}