let error = document.querySelector("#box404");
let errorText = document.querySelector("#box404 h1");
let canvas = document.querySelector("body");
let animate;
let x = 0;
let y = 0;
let xSpeed = 3;
let ySpeed = 3;
//let xOffset = error.offsetWidth;
//let yOffset = error.offsetHeight;

function updatePos(x, y) {
    error.style.bottom = y + "px"; 
    error.style.left = x + "px";  
}

function rc() {
    return Math.floor(Math.random()*256);
}

function changeColor() {
    errorText.style.color = "rgb(" + rc() + "," + rc() + "," + rc() + ")";
}

function northeast() {
    if (x >= (window.innerWidth - error.offsetWidth)) {
        changeColor();
        animate = requestAnimationFrame(northwest);
    } else if (y >= (window.innerHeight - error.offsetHeight)) {
        changeColor();
        animate = requestAnimationFrame(southeast);
    } else {
        x += xSpeed;
        y += ySpeed;
        updatePos(x,y);
        animate = requestAnimationFrame(northeast);
    }
}

function northwest() {
    if (x <= 0) {
        changeColor();
        animate = requestAnimationFrame(northeast);
    } else if (y >= (window.innerHeight - error.offsetHeight)) {
        changeColor();
        animate = requestAnimationFrame(southwest);
    } else {
        x -= xSpeed;
        y += ySpeed;
        updatePos(x,y);
        animate = requestAnimationFrame(northwest);
    }
}

function southwest() {
    if (x <= 0) {
        changeColor();
        animate = requestAnimationFrame(southeast);
    } else if (y <= 0) {
        changeColor();
        animate = requestAnimationFrame(northwest);
    } else {
        x -= xSpeed;
        y -= ySpeed;
        updatePos(x,y);
        animate = requestAnimationFrame(southwest);
    }
}

function southeast() {
    if (x >= (window.innerWidth - error.offsetWidth)) {
        changeColor();
        animate = requestAnimationFrame(southwest);
    } else if (y <= 0) {
        changeColor();
        animate = requestAnimationFrame(northeast);
    } else {
        x += xSpeed;
        y -= ySpeed;
        updatePos(x,y);
        animate = requestAnimationFrame(southeast);
    }
}

canvas.style.overflow = "hidden";
x = Math.floor(Math.random()*(window.innerWidth - error.offsetWidth));
y = Math.floor(Math.random()*(window.innerHeight - error.offsetHeight));
animate = requestAnimationFrame([northeast,northwest,southwest,southeast][Math.floor(Math.random()*4)]);


