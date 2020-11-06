var ball,t1,t2,t3,dustbinImage,dustbinS;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage=loadImage("dustbin.png");
	
}

function setup() {
	createCanvas(800, 700);

	dustbinS=createSprite(635,600,10,10);
	dustbinS.addImage(dustbinImage);
	dustbinS.scale=0.4;

	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 ball=new Paper(200,400,70);
     t1=new Bin(680,600,20,100);
	 t2=new Bin(635,640,100,20);
	 t3=new Bin(580,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  ball.display();
  t1.display();
  t2.display();
  t3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyDown(UP_ARROW)){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:34,y:-14})
	}
}



