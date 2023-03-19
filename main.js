///////////// Ce fichier .js marche de pair avec game.js /////////////
///////////// Il ne faut pas le toucher, il me permet d'avoir une structure de code similaire à löve2D. /////////////


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let interval;
let fps = 0;

let derniereUpdate = 0;


// La fonction ci-dessous permet d'afficher les FPS en haut à gauche de l'écran, je la décommente seulement dans un but de debug et si besoin.
/*
function showFPS() {
    ctx.fillStyle = "White";
    ctx.font = "normal 16pt Arial";

    ctx.fillText(fps + " fps", 10, 20);
}
*/

function run(time) {
    requestAnimationFrame(run);
    let dt = (time - derniereUpdate) / 1000;

    if (dt < (1 / 60) - 0.001) {
        return;
    }

    fps = 1 / dt;
    derniereUpdate = time;
    update(dt);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(ctx);
    //showFPS();
}

function init() {
    // Les 4 lignes en dessous servent à ne pas avoir d'images floues quand les images sont scalées
    ctx.imageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    load();
    //interval = setInterval(run, 1000 / 60);
    requestAnimationFrame(run);
}

init();