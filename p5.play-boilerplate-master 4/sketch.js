var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600, 400)
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  
  bullet = createSprite(50, 200, 30, 10);
  (bullet).shapeColor = color(255, 255, 255);
  wall = createSprite(1200, 200, thickness, 1600/2);
  (wall).shapeColor = color(80, 80, 80);
}

function draw() {
background=rgb(195, 0, 255)
 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5 * bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness)
   
   if(damage>10)
   {
      wall.shapeColor=color(255,0,0);
   }
   
   if(damage<10)
   {
      wall.shapeColor=color(0,255,0)
   }
 }
 drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}



