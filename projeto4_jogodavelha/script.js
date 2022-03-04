const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);


// Initial Data

let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};
let player = '';
let warning = '';
let playing = false;

reset();

// events

qs('.reset').addEventListener('click', reset);
qsa('.item').forEach((item => {
    item.addEventListener('click', itemClick);
}));


// functions
const togglePlayer = () => {
    player = (player === 'x') ? 'o' : 'x';
    renderInfo();
}

function itemClick(e) {
    let item = e.target.getAttribute('data-item');
    if(playing && square[item] === '') {
        square[item] = player;
        renderSquare();
        togglePlayer();
    }
}

function reset() {
    warning = '';

    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'x' : 'o';

    for(let i in square) {
        square[i] = '';
    }
    playing = true;

    renderSquare();
    renderInfo();
}

function renderSquare() {
    for(let i in square) {
        let item = qs(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }
    checkGame();
}

function renderInfo() {
    qs('.vez').innerHTML = player;
    qs('.resultado').innerHTML = warning;
}

function checkGame() {
    if(checkWinnerFor('x')) {
        warning = 'O "x" ganhou!';
        playing = false;
    } else if(checkWinnerFor('o')) {
        warning = 'O "o" ganhou!';
        playing = false;
    } else if(isFull()) {
        warning = 'Deu empate!';
        playing = false;
    }
}

function checkWinnerFor(player) {
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for(let w in pos) {
        let pArray = pos[w].split(',');
        let hasWon = pArray.every(option => square[option] === player);
        if(hasWon) {
            return true;
        }
    }
    return false;

}

function isFull() {
    for(let i in square) {
        if(square[i] === '') {
            return false;
        }
    }
    return true;
}


