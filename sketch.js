var wall,bullet;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall= createSprite(700, 200, thickness,height/2);
  bullet= createSprite(100, 200, 80, 10);
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  
  if(hasCollided(wall,bullet)){
 bullet.velocityX=0;
 var damage=0.5* weight* speed* speed/(thickness* thickness* thickness);

 if(damage>10)
 {
   wall.shapeColor=color(255,0,0);
 }
   if(damage<10)
   {
      wall.shapeColor=color(0,255,0);
   }
  }
  drawSprites();
}
function hasCollided(wall,bullet){
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
  }

