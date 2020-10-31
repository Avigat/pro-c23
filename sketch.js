var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bar1, bar2, bar3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	bar1=createSprite(width/2,height-50,200,20);
	bar1.shapeColor="red";
	bar1 = Bodies.rectangle(width/2,40,200,20,{isStatic:true});
	World.add(world,bar1);

	bar2=createSprite(310,590,20,100);
	bar2.shapeColor="red";
	bar2 = Bodies.rectangle(310,590,20,100,{isStatic:true});
	World.add(world,bar2);

	bar3=createSprite(490,590,20,100);
	bar3.shapeColor="red";
	bar3 = Bodies.rectangle(490,590,20,100,{isStatic:true});
	World.add(world,bar3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);    
  }
}
