var snowImg;
var snow,snowFall;

function preload(){
  snowImg = loadImage("snow3.jpg");
  snowFall = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
  
  snow = createSprite(400, 200, 15, 15);
  snow.scale = 0.25;
  snow.addImage(snowFall);
}


function draw() {
  background(snowImg);  
  drawSprites();

 
}