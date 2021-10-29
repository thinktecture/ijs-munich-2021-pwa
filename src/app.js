import { bresenhamLine } from "./helpers.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d', {
    desynchronized: true
});

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';

let previousPoint;

canvas.addEventListener('pointerdown', event => {
    previousPoint = { x: ~~event.offsetX, y: ~~event.offsetY };
});
canvas.addEventListener('pointermove', event => {
    if (previousPoint) {
        const currentPoint = { x: ~~event.offsetX, y: ~~event.offsetY };
        for(let point of bresenhamLine(previousPoint.x, previousPoint.y,
            currentPoint.x, currentPoint.y)) {
            ctx.fillRect(point.x, point.y, 2, 2);
        }
        previousPoint = currentPoint;
    }
});
canvas.addEventListener('pointerup', event => {
    previousPoint = null;
});

const txtColor = document.querySelector('#color');
txtColor.addEventListener('change', () => {
    ctx.fillStyle = txtColor.value;
});
