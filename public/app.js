// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');


document.getElementById("result").innerText = "Player X turn";
console.log(document.getElementById("result"));


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
function changecurrentPlayer() {
    if(currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    
    document.getElementById("result").innerText = "Player " + currentPlayer + " turn";
}
const ticTacToe = (element, index) => {
    for (const cond of conditions) {
        const [a, b, c] = cond;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            if(cells[a] == "X" || cells[a] == "O"){
                changecurrentPlayer();
                document.getElementById("result").innerText = "Player " + currentPlayer + " wins!";
                console.log(cells[a]);
                blockall(1);
            }
        }
    }
};


const resetGame = (f) => {
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

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame(2));


function btn() {
    
}

function btn1() {
    if(cells[0] == '') {
        cells[0] = currentPlayer;
        document.getElementById("btn1").value = currentPlayer;
        document.getElementById("btn1").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
        
    }
}
function btn2() {
    if(cells[1] == '') {
        cells[1] = currentPlayer;
        document.getElementById("btn2").value = currentPlayer;
        document.getElementById("btn2").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}
function btn3() {
    if(cells[2] == '') {
        cells[2] = currentPlayer;
        document.getElementById("btn3").value = currentPlayer;
        document.getElementById("btn3").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}
function btn4() {
    if(cells[3] == '') {
        cells[3] = currentPlayer;
        document.getElementById("btn4").value = currentPlayer;
        document.getElementById("btn4").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}
function btn5() {
    if(cells[4] == '') {
        cells[4] = currentPlayer;
        document.getElementById("btn5").value = currentPlayer;
        document.getElementById("btn5").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}
function btn6() {
    if(cells[5] == '') {
        cells[5] = currentPlayer;
        document.getElementById("btn6").value = currentPlayer;
        document.getElementById("btn6").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}
function btn7() {
    if(cells[6] == '') {
        cells[6] = currentPlayer;
        document.getElementById("btn7").value = currentPlayer;
        document.getElementById("btn7").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}
function btn8() {
    if(cells[7] == '') {
        cells[7] = currentPlayer;
        document.getElementById("btn8").value = currentPlayer;
        document.getElementById("btn8").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}
function btn9() {
    if(cells[8] == '') {
        cells[8] = currentPlayer;
        document.getElementById("btn9").value = currentPlayer;
        document.getElementById("btn9").classList.add("btndis");
        changecurrentPlayer();
        ticTacToe();
    }
}

