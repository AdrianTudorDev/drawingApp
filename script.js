const ctx = canvas.getContext('2d');
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 2;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

// actioanrea mouse
canvas.addEventListener('mousedown', (e)=> {
    isPressed =true;
    x = e.offsetX;
    y = e.offsetY;
    drawCircle(x, y);
});
canvas.addEventListener('mouseup', (e)=> {
    isPressed =false;
    x = undefined;
    y = undefined;
    drawCircle(x, y);
});
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY; 
        drawCircle(x2, y2);    
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});
//circle facuta pentru prima incercarea rudimentara
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color; //ia culoarea pe care o are 'color' 
    ctx.fill();
}
// functia line folosita pentru a face linia smooth
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color; //ia culoarea pe care o are 'color' 
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
// circle modificarea de dimensiune
increaseBtn.addEventListener('click', () => {
    size += 1;
    if(size > 20) {
        size = 20;
    }
    updateSizeOnScreen()
});
decreaseBtn.addEventListener('click', () => {
    size -= 1;
    if(size < 2) {
        size = 2;
    }
    updateSizeOnScreen()
});
// schimbare culoare
colorEl.addEventListener('change', (e) =>{
    color = e.target.value;
});
// afisare marime creon
function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
//sterge pictura
clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}); 