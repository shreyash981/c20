var fixedrect;
var movingrect ;
function setup() {
  createCanvas(800,400);
 //createSprite(400, 200, 50, 50) ;
 fixedrect = createSprite(200 , 200 ,80, 50);
 movingrect = createSprite (350, 200 , 50, 80 );
fixedrect.shapeColor = "red";
movingrect.shapeColor = "red";
}

function draw() {

  background(255,255,255);  
  movingrect.x = World.mouseX ;
  movingrect.y = World.mouseY ;
 // console.log(movingrect.x - fixedrect.x);
  if(movingrect.x - fixedrect.x < fixedrect.width/2 +movingrect.width/2 
    && movingrect.x - fixedrect.x < fixedrect.width/2 +movingrect.width/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 +movingrect.height/2
    && fixedrect.y - movingrect.y   < fixedrect.height/2 +movingrect.height/2
    ){
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }
  else{
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  drawSprites();

}