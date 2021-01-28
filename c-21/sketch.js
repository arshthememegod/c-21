var box2,box1



function setup() {
  createCanvas(800,400);
  box2=createSprite(100, 200, 50, 50);
box1=createSprite(700,200,50,50)
box2.velocityX=+4
box1.velocityX=-4
}

function draw() {
  background(0);  
  drawSprites();
 bouncing(box1,box2)

  }
  


