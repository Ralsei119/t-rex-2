var invisibleGround
var trex ,trex_running;
var trex_collided;
var ground,groundImage;
function preload(){
 trex_running=loadAnimation ("trex1.png","trex3.png","trex4.png"); 
trex_collided=loadAnimation ("trex_collided.png");
groundImage=loadAnimation("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5

 //crear sprite de suelo
ground=createSprite(200,180,400,20);
ground.addAnimation("ground",groundImage);
ground.x=ground.width/2;

//piso invible pa el t-rex volador
invisibleGround=createSprite (200,190,400,10)
invisibleGround.visible=false;
}




function draw(){
  background("white")
 
  console.log(trex.y);

  //velocidad al suelo
ground.velocityX=-10;

//piso sumamente infinito
if (ground.x<0){
  ground.x=ground.width/2;
}

  //hacer que el t-rex salte al usar barra espaciadora

  if (keyDown("space")&& trex.y>=101){
trex.velocityY=-10;
  }

  //gravedad 2.0 :v
 trex.velocityY=trex.velocityY+0.8;
 
 
  
 //evitar que el t-rex caiga al infinito

 trex.collide(invisibleGround);

  
  
  
  drawSprites();

}
