let img;
function preload(){
    img=loadImage("venus.jpg");
}

function setup(){
    createCanvas(500, 500);
    img.resize(500, 500);
}

function draw(){
    background(255);
    fill(0);
    noStroke();
    let tiles = mouseX / 10;
    let tileSize = width / tiles;
    translate(tileSize / 2, tileSize / 2);
    for(let x = 0;x < tiles;x++) {
        for(let y = 0;y < tiles;y++) {
            let c = img.get(int(x * tileSize), int(y * tileSize));
            let size = map(brightness(c), 0, 255, tileSize, 0);
            ellipse(x * tileSize, y * tileSize, size, size);
        }
    }
}