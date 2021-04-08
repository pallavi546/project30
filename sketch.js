
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;
var polygon,carry;
var gameState = "onSling";

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);

   
	engine = Engine.create();
	world = engine.world;

    ground1=new Ground(600,400,240,10)
    ground2=new Ground(900,300,180,10)
    ground3=new Ground(600,450,1200,10)


    block1=new Block(510,375,30,40)
    block2=new Block(540,375,30,40)
    block3=new Block(570,375,30,40)
    block4=new Block(600,375,30,40)
    block5=new Block(630,375,30,40)
    block6=new Block(660,375,30,40)
    block7=new Block(690,375,30,40)
    block8=new Block(540,335,30,40)
    block9=new Block(570,335,30,40)
    block10=new Block(600,335,30,40)
    block11=new Block(630,335,30,40)
    block12=new Block(660,335,30,40)
    block13=new Block(570,295,30,40)
    block14=new Block(600,295,30,40)
    block15=new Block(630,295,30,40)
    block16=new Block(600,255,30,40)

    block17=new Block(840,275,30,40)
    block18=new Block(870,275,30,40)
    block19=new Block(900,275,30,40)
    block20=new Block(930,275,30,40)
    block21=new Block(960,275,30,40)
    block22=new Block(870,235,30,40)
    block23=new Block(900,235,30,40)
    block24=new Block(930,235,30,40)
    block25=new Block(900,195,30,40)

    polygon=new Ball(200,250,20)
    carry=new Chain(polygon.body,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  background("black");

ground1.display();
ground2.display();
ground3.display();



block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display(); 
block8.display(); 
block9.display(); 
block10.display(); 
block11.display(); 
block12.display(); 
block13.display();
block14.display();
block15.display();
block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
carry.display();
polygon.display();
}
function mouseDragged(){
  if (gameState!=="launched"){
 Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
 carry.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x:200,y:50}); 
     carry.attach();
     gameState="onSling"
     polygon.trajectory=[]
  

  }
}
