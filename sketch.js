var gameState=0;
var playerCount,canvas;


function setup() {
  canvas=createCanvas(displayWidth-20, displayHeight-30);
  
}

function draw() {
  background("blue"); 
  form = new Form()
    form.display(); 
  drawSprites();
}