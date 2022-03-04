const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

// Initial Data

let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = qs('#tela');
let ctx = screen.getContext('2d');


// Events

qsa('.colorArea .color').forEach(item => {
    item.addEventListener('click', ClickColorEvent);
});

screen.addEventListener('movedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

qs('.clear').addEventListener('click', clearScreen);


// Functions

function ClickColorEvent(e) {
    let color =  e.target.getAttribute('data-color');
    currentColor = color;

    qs('.color.active').classList.remove('active');
    e.target.classList.add('active');
};

function mouseDownEvent() {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
};

function mouseMoveEvent(e) {
    if(canDraw) {
        draw(e.pageX. e.pageY);
    }
};

function mouseUpEvent() {
    canDraw = false;
};

function draw() {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();


    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


