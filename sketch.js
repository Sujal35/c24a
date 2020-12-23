/*
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}*/




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustBin1,dustBin3,dustBin3;
var ground;
var paper;
//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	dustBin1= new DustBin(width/2,height-50,100,20);
	dustBin2= new DustBin (450,height-90,20,100);
	dustBin3=new DustBin(350,height-90,20,100);

	
	ground=new Ground(width/2, height-35, width,10);
	paper=new Paper(10,height-50,5);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustBin1.display();
 dustBin2.display();
 dustBin3.display();
 paper.display();
 ground.display();

}



