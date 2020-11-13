var movingrect,fixedrect


function setup() {
  createCanvas(800,400);
  
  movingrect=createSprite(50,30,70,200)
  movingrect.shapeColor="blue"

  fixedrect=createSprite(80,300,70,80)
  fixedrect.shapeColor="green"
}

function draw() {


  background(255,255,255);  
movingrect.x=World.mouseX
movingrect.y=World.mouseY
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && 
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
movingrect.shapeColor="yellow"
fixedrect.shapeColor="yellow"
}
else {
movingrect.shapeColor="blue"
fixedrect.shapeColor="green"
}
  drawSprites();
}