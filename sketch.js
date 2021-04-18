var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(100,100,80,30);
  box1.shapeColor = "magenta";
  box2 = createSprite(200,100,80,30);
  box2.shapeColor = "magenta";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(box1,movingRect)){
  movingRect.shapeColor = "red";
  box1.shapeColor = "red";
}
  else{
    movingRect.shapeColor = "green";
    box1.shapeColor = "magenta";
  }
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  return true
}
else {
 return false
}
}