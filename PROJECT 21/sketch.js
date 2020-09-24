var bullet, wall, thickness
var speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite (50, 200, 45, 25);
  wall = createSprite (1200, 200, thickness, height/2);
  bullet.shapeColor = "white";
  wall.shapeColor = (80,80,80);

  speed = random (223, 321);
  weight = random (30, 52);
  thickness = random (22, 83);

  bullet.velocityX = speed;

}

function hasCollided(bullet, wall) {
  bullet.collide (wall);
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}

function draw() {
  background(255,255,255);  
  hasCollided ();

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed/(thickness *thickness *thickness);
  }

  if (damage>10) {
    wall.shapeColor = color(255,0,0);
  }
  
  if (damage<10) {
    wall.shapeColor = color(0,255,0);
  }
  




  drawSprites();
}