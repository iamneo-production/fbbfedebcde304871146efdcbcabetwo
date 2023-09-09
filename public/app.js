// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let chance = "X";
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
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

// Function to handle player moves
const ticTacToe = (element, index) => {
    for (const cond of conditions) {
        const [a, b, c] = cond;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            if(cells[a] == "X" || cells[a] == "O"){
                changechance();
                document.getElementById("result").innerText = "Player " + chance + " wins!";
                console.log(cells[a]);
                blockall(1);
            }
        }
    }
};


const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);




document.getElementById("result").innerText = "Player X turn";
console.log(document.getElementById("result"));
function ticTacToe() {
    for (const cond of conditions) {
        const [a, b, c] = cond;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            if(cells[a] == "X" || cells[a] == "O"){
                changechance();
                document.getElementById("result").innerText = "Player " + chance + " wins!";
                console.log(cells[a]);
                blockall(1);
            }
        }
    }
}

function blockall(f) {
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
        chance = "X"
        document.getElementById("result").innerText = "Player X turn";
        for(let i = 0; i<9; i++) {
            let e = "btn"+(i+1);
            document.getElementById(e).value = "";
            document.getElementById(e).classList.remove("btndis");
        }
    }
}

function changechance() {
    if(chance == "X") {
        chance = "O";
    } else {
        chance = "X";
    }
    
    document.getElementById("result").innerText = "Player " + chance + " turn";
}
function btn1() {
    if(cells[0] == '') {
        cells[0] = chance;
        document.getElementById("btn1").value = chance;
        document.getElementById("btn1").classList.add("btndis");
        changechance();
        ticTacToe();
        
    }
}
function btn2() {
    if(cells[1] == '') {
        cells[1] = chance;
        document.getElementById("btn2").value = chance;
        document.getElementById("btn2").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}
function btn3() {
    if(cells[2] == '') {
        cells[2] = chance;
        document.getElementById("btn3").value = chance;
        document.getElementById("btn3").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}
function btn4() {
    if(cells[3] == '') {
        cells[3] = chance;
        document.getElementById("btn4").value = chance;
        document.getElementById("btn4").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}
function btn5() {
    if(cells[4] == '') {
        cells[4] = chance;
        document.getElementById("btn5").value = chance;
        document.getElementById("btn5").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}
function btn6() {
    if(cells[5] == '') {
        cells[5] = chance;
        document.getElementById("btn6").value = chance;
        document.getElementById("btn6").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}
function btn7() {
    if(cells[6] == '') {
        cells[6] = chance;
        document.getElementById("btn7").value = chance;
        document.getElementById("btn7").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}
function btn8() {
    if(cells[7] == '') {
        cells[7] = chance;
        document.getElementById("btn8").value = chance;
        document.getElementById("btn8").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}
function btn9() {
    if(cells[8] == '') {
        cells[8] = chance;
        document.getElementById("btn9").value = chance;
        document.getElementById("btn9").classList.add("btndis");
        changechance();
        ticTacToe();
    }
}

