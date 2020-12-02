var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

 bullet=createSprite(50, 200, 90, 30);
bullet.velocityX = speed;

wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(0,0,0);  

if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.collide(wall);
 
 var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10)
  {
    wall.shapeColor=color(225,0,0);
  }

  
  if(damage>5 && damage<9) {
  wall.shapeColor=color(230,230,0); 
}
  
  if(damage<5)
  {
    wall.shapeColor=color(0,255,0);
  }
  }
  drawSprites();
}
