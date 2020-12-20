var bullet,wall,thickness;
var bulletspeed,bulletweight;
var deformation;
function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
  bulletspeed=random(223,321);
  bulletweight=random(30,52);

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=("blue")
  //The height of the wall is half the height of the canvas.
  //The width is equal to the thickness variable.
  wall=createSprite(750,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
 bullet.velocityX=bulletspeed;
 //bullet.shapeColor=(80,80,80)
 
deformation=0.5*bulletweight*bulletspeed*bulletspeed/(thickness*thickness*thickness)
}

function draw() {
  background(255,255,255);
  //don't write the function you created in Alib.js because
//whatever command you have have written
//there, will work here...so, you don't need to add/mention hascollided() 
  //hascollided();
if (bullet.isTouching(wall))
{
    bullet.velocityX=0;
    var deformation=0.5*bulletweight*bulletspeed*bulletspeed/22509
    if(deformation>180)
    {

      bullet.shapeColor=("green");

    }
    if (deformation<180 && deformation>100)
    {

      bullet.shapeColor=("green");

    }
    if (deformation<100)
    {

      bullet.shapeColor=("green");

    }
}

  drawSprites();
}