var fixrec,movrec;
function setup() {
  
  createCanvas(800,400);
  movrec=createSprite(400, 200, 50, 50);
  fixrec=createSprite(500, 300, 50, 50);
  movrec.shapeColor="blue";
  fixrec.shapeColor="blue";

}

function draw() {
  background(255,255,255);  
   
  movrec.x=World.mouseX;
  movrec.y=World.mouseY;

  if(movrec.x-fixrec.x<movrec.width/2+fixrec.width/2 && fixrec.x-movrec.x<movrec.width/2+fixrec.width/2){
    movrec.shapeColor="green";
    fixrec.shapeColor="green";

  }else{
    movrec.shapeColor="blue";
    fixrec.shapeColor="blue";
  }



  if(movrec.y-fixrec.y<movrec.height/2+fixrec.height/2 && fixrec.y-movrec.y<movrec.height/2+fixrec.height/2){
    movrec.shapeColor="green";
    fixrec.shapeColor="green";

  }else{
    movrec.shapeColor="blue";
    fixrec.shapeColor="blue";
  }


  drawSprites();
}