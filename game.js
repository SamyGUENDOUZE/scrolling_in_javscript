let img = new Image();
img.src = "clouds.jpg";

let KeyRight = false;
let KeyLeft = false;
let KeyUp = false;
let KeyDown = false;

function toucheEnfoncee(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = true;
    }
    if (t.code == "ArrowUp") {
        KeyUp = true;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = true;
    }
    if (t.code == "ArrowDown") {
        KeyDown = true;
    }
}

function toucheRelachee(t) {
    t.preventDefault();
    if (t.code == "ArrowRight") {
        KeyRight = false;
    }
    if (t.code == "ArrowUp") {
        KeyUp = false;
    }
    if (t.code == "ArrowLeft") {
        KeyLeft = false;
    }
    if (t.code == "ArrowDown") {
        KeyDown = false;
    }
}


function lat_scroll_to_the_left() {
    x -= speed;
    if (x <= 0) {
        x = canvas.width;
    }
}

function lat_scroll_to_the_right() {
    x += speed;
    if (x >= canvas.width) {
        x = 0;
    }
}

function lat_scroll_to_the_bottom() {
    y += speed;
    if (y >= canvas.height) {
        y = 0;
    }
}

function lat_scroll_to_the_top() {
    y -= speed;
    if (y <= 0) {
        y = canvas.height;
    }
}

function load() {
    document.addEventListener("keydown", toucheEnfoncee, false);
    //document.addEventListener("keyup", toucheRelachee, false);  //si cette ligne est décommentée, le scrolling ne se fera pas et on obtiendra un déplacement touche par touche
    x = 0;
    y = 0;
    speed = 1;
}

function update(dt) {
    
    if (KeyRight) {
        lat_scroll_to_the_right();
    }
    if (KeyLeft) {
        lat_scroll_to_the_left();
    }
    if (KeyDown) {
        lat_scroll_to_the_bottom();
    }
    if (KeyUp) {
        lat_scroll_to_the_top();
    }
}

function draw(pCtx) {
    pCtx.drawImage(img, x, y);
    pCtx.drawImage(img, x - canvas.width, y); // partie qui me sert à gérer le scrolling horizontal dans les 2 sens
    pCtx.drawImage(img, x , y - canvas.height); // partie qui me sert à gérer le scrolling vertical dans les 2 sens
}